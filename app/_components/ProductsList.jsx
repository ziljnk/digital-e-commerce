"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Products from "../_mockData/Products";
import axios from "axios";
import Link from "next/link";
import DisplayProductList from "@/app/_components/DisplayProductList";
import LoopingImageText from "@/components/ui/text/loop-image";

const ProductsList = () => {
	const [productList, setProductList] = useState([]);
	const title = {
		link: "/explore",
		text: "Featured Products",
		image: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
	};

	useEffect(() => {
		// setProductList(Products);
		getProductList();
	}, []);

	const getProductList = async () => {
		// const result = await axios.get("/api/products?limit=9");
		// console.log(result.data);
		// setProductList(result.data.result);

		setProductList(Products);
	};

	return (
		<div>
			<div className="font-bold text-3xl flex justify-between items-center">
				<LoopingImageText
					link={title.link}
					text={title.text}
					image={title.image}
				/>
				{/* <span>
					<Link href={"/explore"}>
						<Button>View All</Button>
					</Link>
				</span> */}
			</div>

			<DisplayProductList productList={productList} />
		</div>
	);
};

export default ProductsList;
