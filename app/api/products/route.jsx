import { NextResponse } from "next/server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/firebaseConfig.js";
import { db } from "@/configs/db";
import { productsTable, usersTable } from "@/configs/schema.js";
import { and, desc, eq, getTableColumns } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";
import cloudinary from "cloudinary";
import { resolve } from "styled-jsx/css";

cloudinary.v2.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
	const formData = await req.formData();
	const image = formData.get("image");
	// const file = formData.get("file");
	// const data = JSON.parse(formData.get("data"));
	console.log("image", image);
	return NextResponse.json({ result: image });
	// const buffer = Buffer.from(await image.arrayBuffer());

	// console.log("image", image);
	// console.log(image, file, data);

	// const imageName = Date.now() + ".png";
	// const storageRef = ref(storage, "product-image/" + imageName);
	// await uploadBytes(storageRef, image).then((snapshot) => {
	// 	console.log("file uploaded");
	// });
	// const imageUrl = await getDownloadURL(storageRef);

	// const fileName = Date.now().toString();
	// const storageFileRef = ref(storage, "product-file/" + fileName);
	// await uploadBytes(storageFileRef, file).then((snapshot) => {
	// 	console.log("file uploaded");
	// });
	// const fileUrl = await getDownloadURL(storageFileRef);

	// console.log("imageUrl", imageUrl);
	// console.log("fileUrl", fileUrl);

	// const result = await db
	// 	.insert(productsTable)
	// 	.values({
	// 		title: data?.title,
	// 		category: data?.category,
	// 		description: data?.description,
	// 		fileUrl: fileUrl,
	// 		imageUrl: imageUrl,
	// 		price: data?.price,
	// 		about: data?.about,
	// 		message: data?.message,
	// 		createdBy: data?.userEmail,
	// 	})
	// 	.returning(productsTable);

	// return new Promise((resolve, reject) => {
	// 	const uploadStream = cloudinary.v2.uploader.upload_stream(
	// 		{
	// 			folder: "growsense/product-images",
	// 			public_id: Date.now().toString(),
	// 			resource_type: "image",
	// 		},
	// 		(error, result) => {
	// 			if (error) {
	// 				reject(
	// 					NextResponse.json(
	// 						{ error: "Upload failed" },
	// 						{ status: 500 }
	// 					)
	// 				);
	// 			} else {
	// 				resolve(NextResponse.json({ url: result.secure_url }));
	// 			}
	// 		}
	// 	);

	// 	uploadStream.end(buffer);
	// });
}

export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const email = searchParams.get("email");
	const limit = searchParams.get("limit");
	const id = searchParams.get("id");

	if (email) {
		const result = await db
			.select({
				...getTableColumns(productsTable),
				user: {
					name: usersTable.name,
					image: usersTable.image,
				},
			})
			.from(productsTable)
			.innerJoin(
				usersTable,
				eq(productsTable.createdBy, usersTable.email)
			)
			.where(eq(productsTable.createdBy, email))
			.orderBy(desc(productsTable.id));

		return NextResponse.json({ result });
	}

	if (id) {
		const result = await db
			.select({
				...getTableColumns(productsTable),
				user: {
					name: usersTable.name,
					image: usersTable.image,
				},
			})
			.from(productsTable)
			.innerJoin(
				usersTable,
				eq(productsTable.createdBy, usersTable.email)
			)
			.where(eq(productsTable.id, id))
			.orderBy(desc(productsTable.id));

		return NextResponse.json(result[0]);
	}

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
		.orderBy(desc(productsTable.id))
		.limit(Number(limit));

	return NextResponse.json({ result });
}

export async function DELETE(req) {
	const { searchParams } = new URL(req.url);
	const productId = searchParams.get("id");
	const user = await currentUser();
	const result = await db
		.delete(productsTable)
		.where(
			and(
				eq(productsTable.id, productId),
				eq(
					productsTable.createdBy,
					user?.primaryEmailAddress?.emailAddress
				)
			)
		);

	return NextResponse.json({ result: "DELETED" });
}
