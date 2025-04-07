import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import TestimonialsMockdata from "../_mockData/Testimonials";
import TextRevealImage from "@/components/ui/text/reveal-image";

const Testimonials = () => {
	const images = [
		{
			src: "/testimonial-title/card-k.jpg",
			alt: "Image 1",
		},
		{
			src: "/testimonial-title/card-q.jpg",
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
