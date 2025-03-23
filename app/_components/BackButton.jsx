"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function AnimatedBackButton({
	label = "Back",
	className,
	onClick,
}) {
	const router = useRouter();
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = () => {
		if (onClick) {
			onClick();
		} else {
			router.back();
		}
	};

	return (
		<motion.button
			className={cn(
				"group flex items-center gap-2 py-2 rounded-full bg-background",
				isHovered ? "px-4" : "pl-4 pr-6",
				className
			)}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onClick={handleClick}
			whileTap={{ scale: 0.95 }}
			initial={{ opacity: 0, x: -10 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.3 }}
		>
			<motion.div
				initial={{ opacity: 0, x: 10 }}
				animate={{
					opacity: isHovered ? 1 : 0,
					x: isHovered ? 0 : 10,
					transition: {
						type: "spring",
						stiffness: 400,
						damping: 17,
					},
				}}
				className="relative"
			>
				<ArrowLeft className="w-5 h-5 text-primary" />
			</motion.div>

			<motion.span
				className="font-medium text-lg text-foreground"
				animate={{
					x: isHovered ? 5 : 0,
					transition: { type: "spring", stiffness: 400, damping: 17 },
				}}
			>
				{label}
			</motion.span>
		</motion.button>
	);
}
