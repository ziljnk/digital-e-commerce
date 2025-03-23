"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Search, User, ShoppingCart, X } from "lucide-react";
import CartList from "@/app/_components/CartList";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function FloatingNavbar({ menuList }) {
	const { scrollY } = useScroll();
	const [isScrolled, setIsScrolled] = useState(false);
	const pathName = usePathname();
	const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = scrollY.on("change", (latest) => {
			// Check if page is scrolled more than 50px
			setIsScrolled(latest > 50);
		});

		return () => unsubscribe();
	}, [scrollY]);

	const handleOpenMenuMobile = () => {
		setIsMenuOpenMobile((prev) => !prev);
	};

	return (
		<motion.header
			className={`fixed top-0 z-[9999] flex w-full items-center justify-between transition-colors left-1/2 transform -translate-x-1/2 backdrop-blur-lg ${isMenuOpenMobile && "h-screen overflow-hidden"}`}
			initial={{ height: 80 }}
			animate={{
				height:
					isMenuOpenMobile ? "100%"
					: isScrolled ? 60
					: 80,
				boxShadow:
					isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "none",
				width:
					isMenuOpenMobile ? "100%"
					: isScrolled ? "50%"
					: "100%",
				top:
					isMenuOpenMobile ? 0
					: isScrolled ? "20px"
					: "0",
				backgroundColor:
					isMenuOpenMobile ? "rgb(255, 255, 255)"
					: isScrolled ? "rgba(255, 255, 255, 0.7)"
					: "rgba(255, 255, 255, 1)",
				borderRadius:
					isMenuOpenMobile ? "0"
					: isScrolled ? "50px"
					: "0",
				justifyContent: isMenuOpenMobile && "flex-start",
				flexDirection: isMenuOpenMobile ? "column" : "row",
			}}
			transition={{
				type: "spring",
				stiffness: 300,
				damping: 20,
			}}
		>
			<motion.div
				className={cn(
					"flex items-center justify-between w-full",
					isScrolled ? "px-2 md:px-5" : "px-3 lg:px-60"
				)}
				animate={{
					// height: isMenuOpenMobile ? "100%" : 60,
					paddingTop: isMenuOpenMobile ? 20 : 0,
				}}
				transition={{ duration: 0.3 }}
			>
				<div className="flex items-center justify-center gap-5 w-full">
					<Button
						onClick={handleOpenMenuMobile}
						variant="ghost"
						size="icon"
						className="lg:hidden"
					>
						{isMenuOpenMobile ?
							<X className="h-5 w-5" />
						:	<Menu className="h-5 w-5" />}
						<span className="sr-only">Toggle menu</span>
					</Button>
					<motion.div
						className="text-xl font-bold flex-1 lg:flex-none cursor-pointer"
						animate={{
							fontSize:
								isMenuOpenMobile ? "1.25rem"
								: isScrolled ? "1.1rem"
								: "1.25rem",
						}}
						transition={{ duration: 0.3 }}
						initial={false}
						onClick={() => router.push("/")}
					>
						GrowSense
					</motion.div>
					<nav className="lg:flex items-center gap-5 text-sm hidden">
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
				<div
					className={`${
						isMenuOpenMobile ? "flex"
						: isScrolled ? "hidden md:flex"
						: "flex"
					} items-center gap-4`}
				>
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
			<motion.nav
				className={`${isMenuOpenMobile ? "flex" : "hidden"} items-center gap-2 text-xl w-full mt-10 px-5`}
				transition={{
					type: "spring",
					stiffness: 300,
					damping: 20,
				}}
				animate={{
					opacity: isMenuOpenMobile ? 1 : 0,
					height: isMenuOpenMobile ? "auto" : 0,
					flexDirection: isMenuOpenMobile && "column",
				}}
			>
				{menuList.map((item, index) => (
					<Link
						href={item.path}
						key={index}
						className={`w-full text-start font-medium transition-colors hover:bg-[#f5f5f5] px-5 py-3 rounded-lg ${pathName === item.path && "bg-[#f5f5f5]"} }`}
					>
						{item.name}
					</Link>
				))}
			</motion.nav>
		</motion.header>
	);
}
