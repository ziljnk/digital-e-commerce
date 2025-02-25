"use client";
import DisplayProductList from "@/app/_components/DisplayProductList";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "@/app/_mockData/Products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { toast } from "sonner";
import SortProducts from "@/app/_components/SortProducts.jsx";

const Explore = () => {
	const [productList, setProductList] = useState([]);
	const [offset, setOffset] = useState(0);
	const [searchInput, setSearchInput] = useState("");
	const [sort, setSort] = useState({
		label: "NEWEST",
		field: "id",
		order: "desc",
	});

	useEffect(() => {
		// getProductList(offset);
		setProductList(Products);
	}, []);

	// useEffect(() => {
	// 	if (sort) {
	// 		setProductList([]);
	// 		getProductList(0);
	// 	}
	// }, [sort]);

	const getProductList = async (offset_) => {
		const result = await axios.post("/api/all-products", {
			limit: 6,
			offset: offset_,
			seatchText: searchInput,
			sort: sort,
		});

		console.log(result.data);
		if (result?.data.error) {
			toast.error(result?.data.error);
		}
		if (productList.length === 0) {
			setProductList(result.data);
		} else {
			setProductList((prev) => [...prev, ...result.data]);
		}
	};

	return (
		<div className="mt-10">
			<h2 className="font-bold text-3xl">Explore</h2>
			<div className="mt-5 mb-5 flex justify-between items-center">
				<div className="flex gap-2 items-center">
					<h2>Search: </h2>
					<Input
						placeholder="Search"
						className="w-80"
						onChange={(event) => setSearchInput(event.target.value)}
					/>
					<Button
						onClick={() => {
							getProductList(0);
							setProductList([]);
						}}>
						<SearchIcon /> Search
					</Button>
				</div>
				<SortProducts onSortChange={(value) => setSort(value)} />
			</div>
			<DisplayProductList productList={productList} />
			<div className="flex justify-center items-center mt-10">
				<Button onClick={() => getProductList(offset + 6)}>
					Load More
				</Button>
			</div>
		</div>
	);
};

export default Explore;
