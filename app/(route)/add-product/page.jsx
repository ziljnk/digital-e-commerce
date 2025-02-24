"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ImageUpload from "./_components/ImageUpload.jsx";
import axios from "axios";

const AddProduct = () => {
	const categoryOption = [
		"Source Code",
		"UI Kit",
		"Icons",
		"Documents",
		"Fonts",
		"Themes",
		"Video",
		"Illustration",
		"Other",
	];
	const [formData, setFormData] = useState([]);
	const handleInputChange = (fieldName, fieldValue) => {
		setFormData((prev) => ({
			...prev,
			[fieldName]: fieldValue,
		}));
		console.log(formData);
	};
	const onAddProductBtnClick = async () => {
		const formDataObject = new FormData();
		formDataObject.append("image", formData.image);
		formDataObject.append("file", formData.file);
		formDataObject.append("data", JSON.stringify(formData));

		const result = await axios.post("/api/products", formDataObject, {
			"Content-Type": "multiport/form-data",
		});

		console.log(result);
	};

	return (
		<div className="mt-10">
			<h2 className="font-3xl font-bold ">Add New Product</h2>
			<p>Start adding product details to sell your item.</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
				<div className="flex flex-col gap-5">
					<ImageUpload
						onImageSelect={(e) =>
							handleInputChange(e.target.name, e.target.files[0])
						}
					/>
					<div>
						<h4>Upload File which you want to sell</h4>
						<Input
							name="file"
							type="file"
							onChange={(e) =>
								handleInputChange(
									e.target.name,
									e.target.files[0]
								)
							}
						/>
					</div>
					<div>
						<h4>Message to User</h4>
						<textarea
							className="border"
							name="message"
							placeholder="Write Thank You Message To User"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<div>
						<h4>Product Title</h4>
						<Input
							name="title"
							placeholder="Ex. UI Kit in Figma"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<h4>Price</h4>
						<Input
							type="number"
							name="price"
							placeholder="Ex. $99"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<h4>Category</h4>
						<select
							// onChange={(value) =>
							// 	handleInputChange("category", value)
							// }
							className="border"
							name="category"
							id="category">
							<option>Select category</option>
							{categoryOption.map((category, index) => (
								<option
									key={index}
									value={category}>
									{category}
								</option>
							))}
						</select>
					</div>
					<div>
						<h4>Description</h4>
						<textarea
							className="border"
							name="description"
							placeholder="Add product description"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<h4>About Product (Optional)</h4>
						<textarea
							className="border"
							name="about"
							id="about-product"
							placeholder="Add product Information"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<Button onClick={onAddProductBtnClick}>Add Product</Button>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
