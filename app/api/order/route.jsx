import { db } from "@/configs/db";
import { cartTable, ordersTable, productsTable } from "@/configs/schema";
import { desc, eq, getTableColumns } from "drizzle-orm";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailOrder from "@/emails/email.jsx";
import { currentUser } from "@clerk/nextjs/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
	const { orderDetail, email } = await req.json();
	let orderList = [];
	orderDetail.forEach((order) => {
		orderList.push({
			email: email,
			productId: order.productId,
		});
	});
	const result = await db.insert(ordersTable).values(orderList);
	const deleteResult = await db
		.delete(cartTable)
		.where(eq(cartTable.email, email));

	const sendEmailResult = await sendEmail(orderDetail, email);

	return NextResponse.json(result);
}

const sendEmail = async (orderDetail, userEmail) => {
	const calculateTotal = () => {
		let total = 0;
		orderDetail.forEach((cartItem) => {
			total = total + Number(cartItem.price);
		});

		return total;
	};
	const result = await resend.emails.send({
		from: "dylan@growsense.store",
		to: userEmail,
		subject: "Order Delivery Receipt",
		react: (
			<EmailOrder
				orderDetail={orderDetail}
				totalAmount={calculateTotal()}
			/>
		),
	});

	return result;
};

export async function GET(req) {
	const user = await currentUser();
	console.log("user", user);

	const result = await db
		.select({
			...getTableColumns(productsTable),
		})
		.from(ordersTable)
		.innerJoin(productsTable, eq(productsTable.id, ordersTable.productId))
		.where(eq(ordersTable.email, user?.primaryEmailAddress?.emailAddress))
		.orderBy(desc(ordersTable.id));

	return NextResponse.json(result);
}
