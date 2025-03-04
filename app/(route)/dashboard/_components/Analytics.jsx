"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Analytics = () => {
	const [orderList, setOrderList] = useState([]);
	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const result = await axios.get("/api/analytics");
		console.log(result.data);
		setOrderList(result.data);
	};

	return (
		<div>
			<h2 className="font-bold text-2xl mt-5">Analytics</h2>
		</div>
	);
};

export default Analytics;
