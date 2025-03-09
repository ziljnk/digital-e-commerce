import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { Highlight } from "@/components/ui/hero-highlight";

const Hero = () => {
	return (
		<div className="h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
			<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

			<Boxes />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-20 z-[999] pointer-events-none max-w-[80%]">
				<div>
					<h2 className="font-extrabold text-5xl text-white">
						Unlock the{" "}
						<Highlight className="text-black dark:text-white">
							Secrets of Magic
						</Highlight>{" "}
						– Learn, Perform, Amaze!
					</h2>
					<p className="text-gray-200 mt-3">
						Discover mind-blowing magic tricks, high-quality card
						accessories, and exclusive digital products. Master the
						art of illusion and take your magic to the next level.
					</p>
					<div className="flex gap-5 mt-8 pointer-events-auto">
						<Link href={"/explore"}>
							<Button size="lg">Explore</Button>
						</Link>
						<Link href={"/dashboard"}>
							<Button size="lg" className="bg-red-500">
								Sell
							</Button>
						</Link>
					</div>
				</div>

				<div className="flex items-center justify-center">
					<Image
						src={"/pc2.webp"}
						alt="PC"
						width={300}
						height={300}
						className="scale-x-[-1]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
