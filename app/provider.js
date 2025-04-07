"use client";
import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { CartContext } from "./_context/CartContext.jsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function Provider({ children }) {
	const [cart, setCart] = useState([]);
	const { user } = useUser();

	useEffect(() => {
		user && checkIsNewUser();
		user && getCartItem();

		console.log("user", user);
	}, [user]);

	const checkIsNewUser = async () => {
		const result = await axios.post("/api/user", {
			user: user,
		});
	};

	const getCartItem = async () => {
		const result = await axios.get(
			"/api/cart?email=" + user?.primaryEmailAddress?.emailAddress
		);
		setCart(result.data);
	};

	return (
		<div>
			<CartContext.Provider value={{ cart, setCart }}>
				{/* <PayPalScriptProvider
					options={{
						clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
					}}
				> */}
				<Header />
				<div className="pt-[80px]">{children}</div>
				<Footer />
				{/* </PayPalScriptProvider> */}
			</CartContext.Provider>
		</div>
	);
}

export default Provider;
