import { NextResponse } from "next/server";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/firebaseConfig.js";

export async function POST(req) {
	const formData = await req.formData();
	const image = formData.get("image");
	const file = formData.get("file");
	const data = JSON.parse(formData.get("data"));

	console.log(image, file, data);

	const imageName = Date.now() + ".png";
	const storageRef = ref(storage, "assets/" + imageName);
	await uploadBytes(storageRef, image).then((snapshot) => {
		console.log("file uploaded");
	});
	console.log(123);

	return NextResponse.json({});
}
