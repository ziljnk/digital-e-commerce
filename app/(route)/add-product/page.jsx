"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "./_components/ImageUpload.jsx";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation.js";
import { toast } from "sonner";

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
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const { user } = useUser();
	useEffect(() => {
		setFormData({
			userEmail: user?.primaryEmailAddress?.emailAddress,
		});
	}, [user]);
	const handleInputChange = (fieldName, fieldValue) => {
		setFormData((prev) => ({
			...prev,
			[fieldName]: fieldValue,
		}));
	};
	const onAddProductBtnClick = async () => {
		setLoading(true);
		const formDataObject = new FormData();
		formDataObject.append("image", formData.image);
		formDataObject.append("file", formData.file);
		formDataObject.append("data", JSON.stringify(formData));

		const result = await axios.post("/api/products", formDataObject, {
			"Content-Type": "multiport/form-data",
		});

		setLoading(false);
		console.log("result", result);
		if (result.status === 200) {
			toast.success("Product Added Successfully!");
			router.push("/dashboard");
		}
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
						<Textarea
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
						<Select
							onValueChange={(value) =>
								handleInputChange("category", value)
							}
						>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Select Category" />
							</SelectTrigger>
							<SelectContent>
								{categoryOption.map((category, index) => (
									<SelectItem key={index} value={category}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div>
						<h4>Description</h4>
						<Textarea
							name="description"
							placeholder="Add product description"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<h4>About Product (Optional)</h4>
						<Textarea
							name="about"
							id="about-product"
							placeholder="Add product Information"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<Button onClick={onAddProductBtnClick} disabled={loading}>
						{loading ? (
							<Loader2Icon className="animate-spin" />
						) : (
							"Add Product"
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
