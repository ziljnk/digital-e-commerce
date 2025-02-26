"use client";
import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { CartContext } from "./_context/CartContext.jsx";
import Products from "./_mockData/Products";

function Provider({ children }) {
	const [cart, setCart] = useState([]);
	// const { user } = useUser();

	// useEffect(() => {
	// 	user && checkIsNewUser();
	//  user && getCartItem();
	// }, [user]);

	// const checkIsNewUser = async () => {
	// 	const result = await axios.post("/api/user", {
	// 		user: user,
	// 	});

	// 	console.log(result.data);
	// };

	useEffect(() => {
		setCart([Products[0], Products[1], Products[2]]);
	}, []);

	const getCartItem = async () => {
		const result = await axios.get(
			"/api/cart?email=" + user?.primaryEmailAddress?.emailAddress
		);
		setCart(result.data);
		console.log(result);
	};

	return (
		<div>
			<CartContext.Provider value={{ cart, setCart }}>
				<Header />
				<div>{children}</div>
			</CartContext.Provider>
		</div>
	);
}

export default Provider;
