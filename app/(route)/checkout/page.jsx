"use client";
import { CartContext } from "@/app/_context/CartContext";
import React, { useContext, useState } from "react";
import CheckoutProductItem from "@/app/_components/CheckoutProductItem.jsx";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@clerk/nextjs";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "sonner";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Checkout = () => {
	const { user } = useUser();
	const { cart, setCart } = useContext(CartContext);
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const calculateTotal = () => {
		let total = 0;
		cart.forEach((cartItem) => {
			total = total + Number(cartItem.price);
		});

		return total;
	};
	const onPaymentSuccess = async () => {
		setLoading(true);
		const result = await axios.post("/api/order", {
			orderDetail: cart,
			email: user?.primaryEmailAddress?.emailAddress,
		});

		if (result.status === 200) {
			toast.success("Order created successfully");
			setCart([]);
		}
		setLoading(false);
		router.replace("/dashboard");

		console.log(result);
	};

	return (
		<div className="mt-10">
			<h2 className="font-bold text-3xl">Checkout</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-10">
				<div className="flex flex-col gap-3 ">
					{cart.map((cartItem, index) => (
						<CheckoutProductItem key={index} product={cartItem} />
					))}
				</div>

				<div>
					<Card className="p-5">
						<h2 className="font-bold text-2xl flex justify-between">
							Total: <span>${calculateTotal()}</span>
						</h2>
						<hr className="my-5 border-black" />
						<div>
							Your payment receipt and product will be delivered
							to your registered email{" "}
							<Badge className={"text-black"}>
								{user?.primaryEmailAddress?.emailAddress}
							</Badge>
						</div>
						<Button className="mt-10" onClick={onPaymentSuccess}>
							Create order
						</Button>

						<div className="mt-10">
							{calculateTotal() && (
								<PayPalButtons
									style={{ layout: "horizontal" }}
									createOrder={(data, actions) => {
										return actions.order.create({
											purchase_units: [
												{
													amount: {
														value: calculateTotal(),
														currency_code: "USD",
													},
												},
											],
										});
									}}
									onApprove={() => onPaymentSuccess()}
									onCancel={() =>
										toast.error("Payment cancelled")
									}
								/>
							)}
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
