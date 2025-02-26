"use client";
import { CartContext } from "@/app/_context/CartContext";
import React, { useContext } from "react";
import CheckoutProductItem from "@/app/_components/CheckoutProductItem.jsx";
import { Card } from "@/components/ui/card";

const Checkout = () => {
	const { cart, setCart } = useContext(CartContext);
	const calculateTotal = () => {
		let total = 0;
		cart.forEach((cartItem) => {
			total = total + Number(cartItem.price);
		});

		return total;
	};

	return (
		<div className="mt-10">
			<h2 className="font-bold text-3xl">Checkout</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
				<div className="flex flex-col gap-3 ">
					{cart.map((cartItem, index) => (
						<CheckoutProductItem
							key={index}
							product={cartItem}
						/>
					))}
				</div>

				<div>
					<Card className="p-5">
						<h2 className="font-bold text-2xl flex justify-between">
							Total: <span>${calculateTotal()}</span>
						</h2>
						<hr className="my-5 border-black" />
						<p>
							Your payment receipt and product will be delivered
							to your registered email
						</p>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
