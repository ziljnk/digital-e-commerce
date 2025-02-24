import { NextResponse } from "next/server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/firebaseConfig.js";
import { db } from "@/configs/db";
import { productsTable, usersTable } from "@/configs/schema.js";
import { desc, eq, getTableColumns } from "drizzle-orm";

export async function POST(req) {
	const formData = await req.formData();
	const image = formData.get("image");
	const file = formData.get("file");
	const data = JSON.parse(formData.get("data"));

	console.log(image, file, data);

	const imageName = Date.now() + ".png";
	const storageRef = ref(storage, "product-image/" + imageName);
	await uploadBytes(storageRef, image).then((snapshot) => {
		console.log("file uploaded");
	});
	const imageUrl = await getDownloadURL(storageRef);

	const fileName = Date.now().toString();
	const storageFileRef = ref(storage, "product-file/" + fileName);
	await uploadBytes(storageFileRef, file).then((snapshot) => {
		console.log("file uploaded");
	});
	const fileUrl = await getDownloadURL(storageFileRef);

	console.log("imageUrl", imageUrl);
	console.log("fileUrl", fileUrl);

	const result = await db
		.insert(productsTable)
		.values({
			title: data?.title,
			category: data?.category,
			description: data?.description,
			fileUrl: fileUrl,
			imageUrl: imageUrl,
			price: data?.price,
			about: data?.about,
			message: data?.message,
			createdBy: data?.userEmail,
		})
		.returning(productsTable);

	return NextResponse.json(result);
}

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const email = searchParams.get("email");

	const result = await db
		.select({
			...getTableColumns(productsTable),
			user: {
				name: usersTable.name,
				image: usersTable.image,
			},
		})
		.from(productsTable)
		.innerJoin(usersTable, eq(productsTable.createdBy, usersTable.email))
		.where(eq(productsTable.createdBy, email))
		.orderBy(desc(productsTable.id));
	return NextResponse.json({ result });
}
