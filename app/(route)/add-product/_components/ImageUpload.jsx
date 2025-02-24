"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React, { useState } from "react";

const ImageUpload = ({ onImageSelect }) => {
	const [image, setImage] = useState();
	const handleFileChange = (event) => {
		onImageSelect(event);
		console.log(event);

		const file = event.target.files[0];
		const render = new FileReader();
		render.onloadend = () => {
			setImage(render.result);
		};
		render.readAsDataURL(file);
	};

	return (
		<div>
			<h2>Upload Product Image</h2>
			<Input
				type="file"
				id="imageUpload"
				name="image"
				className="hidden"
				onChange={handleFileChange}
				accept="image/*"
			/>
			<label htmlFor="imageUpload">
				<div className="p-10 flex justify-center items-center cursor-pointer border-dashed border-2 border-black bg-slate-200">
					{image ? (
						<Image
							src={image}
							width={300}
							height={300}
							className="object-contain h-[200px]"
							alt="selected image"
						/>
					) : (
						<Image
							src={"/image.png"}
							alt="Image upload"
							width={70}
							height={70}
						/>
					)}
				</div>
			</label>
		</div>
	);
};

export default ImageUpload;
