import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import FloatingNavBar from "@/components/ui/floating-nav";

export const menuList = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Store",
		path: "/store",
	},
	{
		name: "Blog",
		path: "/blog",
	},
	{
		name: "About",
		path: "/about",
	},
];

function Header() {
	const { cart, setCart } = useContext(CartContext);

	return <FloatingNavBar menuList={menuList} />;
}

export default Header;
