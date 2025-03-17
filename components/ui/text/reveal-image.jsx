import { cn } from "@/lib/utils";

export default function TextRevealImage({ text, images }) {
	const container = "absolute right-8 -top-1 z-40 h-20 w-16";
	const effect =
		"relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

	return (
		<div className="group relative h-fit w-fit overflow-visible py-8">
			<h1 className="md:text-7xl text-6xl font-black text-foreground transition-all duration-500 group-hover:opacity-40">
				{text}
			</h1>
			<div className={container}>
				<div className={effect}>
					<img
						alt={images[1].alt}
						src={images[1].src}
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
			<div
				className={cn(
					container,
					"translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
				)}
			>
				<div className={cn(effect, "duration-200")}>
					<img
						alt={images[0].alt}
						src={images[0].src}
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
