"use client";
import DisplayProductList from "@/app/_components/DisplayProductList";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PurchasedHistory = () => {
	const [productList, setProductList] = useState([]);
	useEffect(() => {
		getPurchasedHistory();
	}, []);
	const getPurchasedHistory = async () => {
		const result = await axios.get("/api/order");
		setProductList(result.data);
	};
	return (
		<div>
			<h2 className="font-bold text-3xl mt-5">Purchased History</h2>
			{productList && (
				<DisplayProductList
					productList={productList}
					purchased={true}
				/>
			)}
		</div>
	);
};

export default PurchasedHistory;
