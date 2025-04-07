"use client";
import { useState } from "react";
import Image from "next/image";
import { FileUpload } from "@/components/ui/file-upload";

const ImageUpload = ({ onImageSelect }) => {
	const [image, setImage] = useState(null);

	const handleFileChange = (files) => {
		const file = files[0];
		if (file) {
			previewImage(file);
			onImageSelect(file);
		}
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
			<FileUpload onChange={handleFileChange} />
			{image && (
				<Image
					src={image}
					width={300}
					height={300}
					className="object-contain h-[200px]"
					alt="Selected image"
				/>
			)}
		</div>
	);
};

export default ImageUpload;
