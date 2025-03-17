"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Search, User, ShoppingCart } from "lucide-react";
import CartList from "@/app/_components/CartList";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingNavbar({ menuList }) {
	const { scrollY } = useScroll();
	const [isScrolled, setIsScrolled] = useState(false);
	const pathName = usePathname();

	useEffect(() => {
		const unsubscribe = scrollY.on("change", (latest) => {
			// Check if page is scrolled more than 50px
			setIsScrolled(latest > 50);
		});

		return () => unsubscribe();
	}, [scrollY]);

	return (
		<motion.header
			className="fixed top-0 z-50 flex w-full items-center justify-between transition-colors left-1/2 transform -translate-x-1/2 bg-white/60 backdrop-blur-lg"
			initial={{ height: 80 }}
			animate={{
				height: isScrolled ? 60 : 80,
				boxShadow:
					isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
				width: isScrolled ? "50%" : "100%",
				top: isScrolled ? "20px" : "0",
				backgroundColor:
					isScrolled ?
						"rgba(255, 255, 255, 0.7)"
					:	"rgba(255, 255, 255, 1)",
				borderRadius: isScrolled ? "50px" : "0",
			}}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
		>
			<motion.div
				className={cn(
					"flex items-center justify-between w-full px-5",
					isScrolled ? "px-5" : "px-60"
				)}
				animate={
					{
						// width: isScrolled ? "95%" : "100%",
						// maxWidth: isScrolled ? "1200px" : "100%",
						// paddingInline: isScrolled ? "1.25rem" : "15rem",
					}
				}
				transition={{ duration: 0.3 }}
			>
				<div className="flex items-center gap-5">
					{/* <Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle menu</span>
					</Button> */}
					<motion.div
						className="text-xl font-bold"
						animate={{
							fontSize: isScrolled ? "1.1rem" : "1.25rem",
						}}
						transition={{ duration: 0.3 }}
					>
						GrowSense
					</motion.div>
					<nav className="flex items-center gap-5 text-sm">
						{menuList.map((item, index) => (
							<Link
								href={item.path}
								key={index}
								className={`font-medium transition-colors hover:bg-[#f5f5f5] px-2 py-1 rounded-lg ${pathName === item.path && "bg-[#f5f5f5]"} }`}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon">
						<Search className="h-5 w-5" />
						<span className="sr-only">Search</span>
					</Button>
					<Button variant="ghost" size="icon">
						<User className="h-5 w-5" />
						<span className="sr-only">User</span>
					</Button>
					<CartList>
						<Button variant="ghost" size="icon">
							<ShoppingCart className="h-5 w-5" />
							<span className="sr-only">Cart</span>
						</Button>
					</CartList>
				</div>
			</motion.div>
		</motion.header>
	);
}
