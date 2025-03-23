"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Products from "@/app/_mockData/Products";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SimilarProduct from "./_components/SimilarProduct.jsx";
import ImageCarousel from "@/components/ui/image-carousel";
import AnimatedBackButton from "@/app/_components/BackButton.jsx";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import AddToCartBtn from "@/app/_components/AddToCartBtn.jsx";

const ProductDetail = () => {
	const { productId } = useParams();
	const [productDetail, setProductDetail] = useState();
	const getProductDetail = async () => {
		// const result = await axios.get("/api/products?id=" + productId);
		// console.log(result.data);
		// setProductDetail(result.data);
		setProductDetail(Products[0]);
	};

	useEffect(() => {
		getProductDetail();
	}, []);

	const productImages = [
		{
			id: 1,
			image: "https://plus.unsplash.com/premium_photo-1718204436526-277f9f34607c?q=80&w=1818&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Item 1",
		},
		{
			id: 2,
			image: "https://images.unsplash.com/photo-1718717722247-26f4c6c09192?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8",
			title: "Item 2",
		},
		{
			id: 3,
			image: "https://plus.unsplash.com/premium_photo-1718570262641-54c3ea3142e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Item 3",
		},
		{
			id: 4,
			image: "https://images.unsplash.com/photo-1718524767488-10ee93e05e9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Item 4",
		},
		{
			id: 5,
			image: "https://images.unsplash.com/photo-1718524767488-10ee93e05e9c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			title: "Item 4",
		},
	];

	return (
		productDetail && (
			<div>
				<AnimatedBackButton />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					<ImageCarousel items={productImages} />

					<div className="flex flex-col gap-5">
						<div>
							<h2 className="font-bold text-2xl">
								{productDetail?.title}
							</h2>
							<Badge className={"text-black"}>
								{productDetail.category}
							</Badge>
						</div>
						<h2 className="font-bold text-3xl text-yellow-600">
							${productDetail.price}
						</h2>
						<p className="text-gray-500">
							The {productDetail.category} will send to your
							register email id once you purchase this digital
							content.
						</p>
						<AddToCartBtn size="lg" product={productDetail} />

						<Accordion type="single" collapsible>
							<AccordionItem value="item-1">
								<AccordionTrigger>Description</AccordionTrigger>
								<AccordionContent>
									{productDetail.description}
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>
									About Product
								</AccordionTrigger>
								<AccordionContent>
									{productDetail.about}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>

				<div className="mt-10">
					<SimilarProduct category={productDetail.category} />
				</div>
			</div>
		)
	);
};

export default ProductDetail;
