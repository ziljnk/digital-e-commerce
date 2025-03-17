"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const CardWithEffect = ({ children, background }) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	return (
		<div
			className="relative flex-1 rounded-xl border border-white/30 p-4 overflow-hidden"
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{ willChange: "transform" }}
		>
			{isHovered && (
				<div
					className="absolute rounded-xl pointer-events-none"
					style={{
						width: "350px",
						height: "350px",
						top: mousePosition.y - 150,
						left: mousePosition.x - 150,
						background: background,
						filter: "blur(50px)",
						zIndex: 1,
						willChange: "transform, top, left",
					}}
				/>
			)}
			<div className="relative z-10">{children}</div>
		</div>
	);
};

export function GlassGrid({ num = 20, background }) {
	const [mounted, setMounted] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<CardWithEffect background={background}>
			<div className="w-full flex items-center justify-center p-1">
				<div className="grid grid-cols-6 gap-2 p-4 w-full">
					{Array.from({ length: num }).map((_, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								delay: i * 0.1,
								ease: "easeOut",
							}}
							whileHover={{ scale: 1.05, rotate: 2 }}
							className={`
                relative aspect-square rounded-2xl overflow-hidden
                bg-white/5 dark:bg-black/20
                backdrop-blur-2xl backdrop-saturate-150
                border border-white/10 dark:border-black/20
                transition-all duration-300 w-[300px] h-[300px]
              `}
						>
							<div
								className="absolute inset-0 bg-gradient-to-t
                from-white/10 to-transparent
                dark:from-black/20 dark:to-transparent
                opacity-80 transition-opacity duration-300"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</CardWithEffect>
	);
}

export function GlassGridDemo() {
	return <GlassGrid num={30} background="#facc15" />;
}
