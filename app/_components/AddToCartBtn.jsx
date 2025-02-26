import axios from "axios";
import React, { useContext, useState } from "react";
import ProductEditableOption from "./ProductEditableOption";
import { MoreVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartContext } from "../_context/CartContext";

const AddToCartBtn = ({ editable, size = "sm", product }) => {
	const { cart, setCart } = useContext(CartContext);
	const [loading, setLoading] = useState(false);
	const addToCart = async () => {
		setLoading(true);
		const result = await axios.post("/api/cart", {
			email: user?.primaryEmailAddress?.emailAddress,
			productId: product.id,
		});

		setCart((cart) => [...cart, product]);
		setLoading(false);
		console.log(result.data);
	};
	return (
		<div>
			{!editable ? (
				<Button
					disabled={loading}
					onClick={() => addToCart()}
					size={size}
					className="mt-1 w-full">
					Add to Cart
				</Button>
			) : (
				<ProductEditableOption>
					<MoreVerticalIcon />
				</ProductEditableOption>
			)}
		</div>
	);
};

export default AddToCartBtn;
