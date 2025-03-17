import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import TestimonialsMockdata from "../_mockData/Testimonials";
import TextRevealImage from "@/components/ui/text/reveal-image";

const Testimonials = () => {
	const images = [
		{
			src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
			alt: "Image 1",
		},
		{
			src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
			alt: "Image 2",
		},
	];

	return (
		<div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
			<div className="mb-5">
				{/* <h2 className="font-bold text-3xl">Cusomter Reviews</h2> */}
				<TextRevealImage text="Cusomter Reviews" images={images} />
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
