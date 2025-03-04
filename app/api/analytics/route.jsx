import { db } from "@/configs/db";
import { ordersTable, productsTable, usersTable } from "@/configs/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
	const user = await currentUser();
	try {
		const result = await db
			.select()
			.from(ordersTable)
			.innerJoin(
				productsTable,
				eq(ordersTable.productId, productsTable.id)
			)
			.innerJoin(
				usersTable,
				eq(usersTable.email, productsTable.createdBy)
			)
			.where(
				eq(usersTable.email, user?.primaryEmailAddress?.emailAddress)
			);

		return NextResponse.json(result);
	} catch (error) {
		return NextResponse.error(error);
	}
}
