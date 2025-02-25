"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import Products from "../_mockData/Products";
import axios from "axios";
import Link from "next/link";
import DisplayProductList from "@/app/_components/DisplayProductList";

const ProductsList = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		setProductList(Products);
		// getProductList();
	}, []);

	const getProductList = async () => {
		const result = await axios.get("/api/products?limit=9");
		console.log(result.data);
		setProductList(result.data.result);
	};

	return (
		<div>
			<h2 className="font-bold text-lg flex justify-between items-center">
				Featured
				<span>
					<Link href={"/explore"}>
						<Button>View All</Button>
					</Link>
				</span>
			</h2>

			<DisplayProductList productList={productList} />
		</div>
	);
};

export default ProductsList;
