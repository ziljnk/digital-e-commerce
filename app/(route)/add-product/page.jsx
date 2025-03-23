"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
		console.log("user", user);
	}, [user]);
	const handleInputChange = (fieldName, fieldValue) => {
		setFormData((prev) => ({
			...prev,
			[fieldName]: fieldValue,
		}));

		console.log("formData", formData);
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
			// router.push("/dashboard");
		}
	};

	return (
		<div className="mt-10">
			<h2 className="text-3xl font-bold ">Add New Product</h2>
			<p>Start adding product details to sell your item.</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
				<div className="flex flex-col gap-5">
					<ImageUpload
						onImageSelect={(e) =>
							handleInputChange(e.target.name, e.target.files[0])
						}
					/>
					<div>
						<Label htmlFor="file">
							Upload File which you want to sell
						</Label>
						<Input
							id="file"
							className="mt-2"
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
						<Label htmlFor="message">Message to User</Label>
						<Textarea
							id="message"
							className="mt-2"
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
						<Label htmlFor="title">Product Title</Label>
						<Input
							id="title"
							className="mt-2"
							name="title"
							placeholder="Ex. UI Kit in Figma"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="price">Price</Label>
						<Input
							id="price"
							className="mt-2"
							type="number"
							name="price"
							placeholder="Ex. $99"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<Label>Category</Label>
						<Select
							onValueChange={(value) =>
								handleInputChange("category", value)
							}
						>
							<SelectTrigger className="w-[180px] mt-2">
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
						<Label htmlFor="description">Product Description</Label>
						<Textarea
							id="description"
							className="mt-2"
							name="description"
							placeholder="Add product description"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<div>
						<Label htmlFor="about-product">About Product</Label>
						<Textarea
							className="mt-2"
							name="about"
							id="about-product"
							placeholder="Add product Information"
							onChange={(e) =>
								handleInputChange(e.target.name, e.target.value)
							}
						/>
					</div>
					<Button onClick={onAddProductBtnClick} disabled={loading}>
						{loading ?
							<Loader2Icon className="animate-spin" />
						:	"Add Product"}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddProduct;
