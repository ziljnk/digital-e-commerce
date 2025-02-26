import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import axios from "axios";
import { toast } from "sonner";

const RemoveFromCart = ({ product }) => {
	const { cart, setCart } = useContext(CartContext);
	const removeItem = async () => {
		// const result = await axios.delete("/api/cart?recordId=" + product?.id);
		toast.success("Item removed");

		const cartList = cart.filter((cartItem) => cartItem.id !== product.id);
		setCart(cartList);
	};
	return (
		<h2
			className="text-red-500 cursor-pointer"
			onClick={() => removeItem()}>
			Remove
		</h2>
	);
};

export default RemoveFromCart;
