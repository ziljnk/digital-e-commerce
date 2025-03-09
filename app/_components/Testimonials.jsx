import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import TestimonialsMockdata from "../_mockData/Testimonials";

const Testimonials = () => {
	return (
		<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<div className="mb-5">
				<h2 className="font-bold text-3xl">Cusomter Reviews</h2>
				<p>What our customers are saying...</p>
			</div>
			<InfiniteMovingCards
				items={TestimonialsMockdata}
				direction="right"
				speed="slow"
			/>
		</div>
	);
};

export default Testimonials;
