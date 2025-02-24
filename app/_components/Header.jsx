import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
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
	];
	return (
		<div className="flex p-4 px-10 md:px-32 lg:px-48 bg-primary border-b-4 border-black justify-between items-center">
			<h2 className="font-bold text-lg bg-black text-white px-2 p-1">
				DIGI STORE
			</h2>

			<ul className="hidden md:flex gap-5 px-2 p-1">
				{menuList.map((menu, index) => (
					<Link
						href={menu.path}
						key={index}>
						<li className=" px-2 p-1 cursor-pointer hover:border-2 hover:border-white">
							{menu.name}
						</li>
					</Link>
				))}
			</ul>

			<div className="flex gap-5 items-center">
				<ShoppingBag />
				<Link href={"/dashboard"}>
					<Button className="bg-red-500 hover:bg-red-600">
						Start Selling
					</Button>
				</Link>
				<UserButton />
			</div>
		</div>
	);
}

export default Header;
