import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import CartList from "./CartList.jsx";
import Image from "next/image";
import FloatingNavBar from "@/components/ui/floating-nav";

function Header() {
	const { cart, setCart } = useContext(CartContext);
	const menuList = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Store",
			path: "/store",
		},
		{
			name: "Explore",
			path: "/explore",
		},
		{
			name: "Blog",
			path: "/blog",
		},
	];
	return (
		// <div className="flex p-4 px-10 md:px-32 lg:px-48 bg-primary border-b-4 border-black justify-between items-center">
		// 	<Link href={"/"}>
		// 		<Image
		// 			src="/logo.webp"
		// 			width={100}
		// 			height={100}
		// 			className="px-2 p-1"
		// 			alt="logo growsense"
		// 		/>
		// 	</Link>

		// 	<ul className="hidden md:flex gap-5 px-2 p-1">
		// 		{menuList.map((menu, index) => (
		// 			<Link href={menu.path} key={index}>
		// 				<li className="px-2 p-1 cursor-pointer">{menu.name}</li>
		// 			</Link>
		// 		))}
		// 	</ul>

		// 	<div className="flex gap-5 items-center">
		// 		<CartList>
		// 			<div className="flex items-center">
		// 				<ShoppingBag />
		// 				<Badge variant={"destructive"}>{cart.length}</Badge>
		// 			</div>
		// 		</CartList>
		// 		<Link href={"/dashboard"}>
		// 			<Button variant="destructive">Start Selling</Button>
		// 		</Link>
		// 		<UserButton />
		// 	</div>
		// </div>

		<FloatingNavBar menuList={menuList} />
	);
}

export default Header;
