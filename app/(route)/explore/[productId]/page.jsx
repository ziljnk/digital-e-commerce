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
		const result = await axios.get("/api/products?id=" + productId);
		console.log(result.data);
		setProductDetail(result.data);
	};

	useEffect(() => {
		getProductDetail();
	}, []);

	return (
		productDetail && (
			<div className="mt-10">
				<h2>BACK</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-10">
					<Card className="flex items-center justify-center max-h-[400px]">
						<Image
							src={productDetail?.imageUrl}
							alt={productDetail.title}
							width={400}
							height={400}
							className="h-[400px] w-full object-contain"
						/>
					</Card>

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
