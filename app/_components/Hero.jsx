import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";

const Hero = () => {
	return (
		<div className="h-[400px] flex w-full justify-between items-center px-10">
			<video className="h-[400px]" autoPlay loop muted>
				<source
					src="https://res.cloudinary.com/dkl7bdanm/video/upload/v1742432682/7d528baf719b19cea73f281ce6c389a6_sd8lnh.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="w-full h-full flex flex-col justify-center items-center container mx-auto z-10">
				<h2 className="font-extrabold text-7xl text-center">
					Unlock the{" "}
					{/* <Highlight className="text-black dark:text-white"> */}
					Secrets of Magic
					{/* </Highlight>{" "} */}– Learn, Perform, Amaze!
				</h2>
				<p className="mt-3 text-center text-xl">
					Discover mind-blowing magic tricks, high-quality card
					accessories, and exclusive digital products. Master the art
					of illusion and take your magic to the next level.
				</p>
			</div>
			<video className="h-[400px]" autoPlay loop muted>
				<source
					src="https://res.cloudinary.com/dkl7bdanm/video/upload/v1742432681/07c26ce8574c2e2b215ad49feedb312b_qhq61z.mp4"
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default Hero;
