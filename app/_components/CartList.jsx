import React, { useContext } from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { CartContext } from "../_context/CartContext";
import CartProductItem from "./CartProductItem.jsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartList = ({ children }) => {
	const { cart, setCart } = useContext(CartContext);
	const calculateTotal = () => {
		let total = 0;
		cart.forEach((cartItem) => {
			total = total + Number(cartItem.price);
		});

		return total;
	};

	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Cart ({cart.length})</SheetTitle>
					<SheetDescription asChild>
						<div>
							<p>Your all cart items listed here.</p>
							<div className="flex flex-col gap-2 mt-5">
								{cart.map((product, index) => (
									<CartProductItem
										key={index}
										product={product}
									/>
								))}
							</div>

							<div>
								<h2 className="font-bold flex text-2xl justify-between mt-10">
									Total: <span>${calculateTotal()}</span>
								</h2>
								<Link href={"/checkout"}>
									<Button className="w-full mt-3">
										CHECKOUT
									</Button>
								</Link>
							</div>
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default CartList;
