"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const ImageUpload = ({ onImageSelect }) => {
	const [image, setImage] = useState(null);
	const [dragging, setDragging] = useState(false);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			previewImage(file);
			onImageSelect(event);
		}
	};

	const handleDragOver = (event) => {
		event.preventDefault();
		setDragging(true);
	};

	const handleDragLeave = () => {
		setDragging(false);
	};

	const handleDrop = (event) => {
		event.preventDefault();
		setDragging(false);
		const file = event.dataTransfer.files[0];
		if (file) {
			previewImage(file);
			onImageSelect(event);
		}
		console.log("file", event);
	};

	const previewImage = (file) => {
		const reader = new FileReader();
		reader.onloadend = () => {
			setImage(reader.result);
		};
		reader.readAsDataURL(file);
	};

	return (
		<div>
			<Label htmlFor="imageUpload">Upload Product Image</Label>
			<Input
				type="file"
				id="imageUpload"
				name="image"
				className="hidden"
				onChange={handleFileChange}
				accept="image/*"
			/>
			<label htmlFor="imageUpload">
				<div
					className={`p-10 flex justify-center items-center cursor-pointer border-dashed border-2 border-black bg-slate-200 mt-2 transition-all ${dragging ? "bg-gray-300" : ""}`}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>
					{image ?
						<Image
							src={image}
							width={300}
							height={300}
							className="object-contain h-[200px]"
							alt="Selected image"
						/>
					:	<Image
							src="/image.png"
							alt="Image upload placeholder"
							width={100}
							height={100}
						/>
					}
				</div>
			</label>
		</div>
	);
};

export default ImageUpload;
