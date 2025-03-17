"use client";
import React from "react";
// import { LampDemo } from "@/components/ui/effects/lamp";
import { LampContainer } from "@/components/ui/effects/lamp";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<LampContainer>
			<motion.div
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				className="w-full"
			>
				<div className="grid grid-cols-3">
					<div className="flex flex-col items-center justify-center">
						<p className=" bg-gradient-to-b from-slate-500 to-slate-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
							Menu
						</p>
						<Link className="text-white" href={"/"}>
							Home
						</Link>
						<Link className="text-white" href={"/store"}>
							Store
						</Link>
						<Link className="text-white" href={"/explore"}>
							Explore
						</Link>
					</div>
					<div className="flex flex-col items-center justify-center">
						<Image
							src="/logo.webp"
							alt="GrowSense Logo"
							width={100}
							height={100}
						/>
					</div>
					<p className=" bg-gradient-to-b from-slate-500 to-slate-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
						Terms of Service
					</p>
				</div>
			</motion.div>
		</LampContainer>
	);
};

export default Footer;
