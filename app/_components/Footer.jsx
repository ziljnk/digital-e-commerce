import Image from "next/image";
import cardBorder from "@/public/cards-footer.png";
import { menuList } from "./Header";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";
import SocialList from "./SocialList";

export default function Footer() {
	return (
		<footer className="relative overflow-hidden mt-10">
			{/* Top card border */}
			{/* <div className="w-full">
				<Image
					src={cardBorder}
					alt="Card border top"
					width={3333}
					height={499}
					className="w-full h-auto object-cover"
					priority
				/>
			</div> */}

			{/* Content */}
			<div className="container mx-auto flex justify-between items-end pt-10 px-4">
				<div className="flex flex-col gap-7 items-start justify-center">
					<div className="text-5xl font-bold mb-4">GrowSense</div>
					<div className="flex flex-col items-start justify-center gap-5">
						<div className="flex items-center gap-7">
							{menuList.map((item, index) => (
								<Link key={index} href={item.path}>
									<LinkPreview
										className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-purple-500"
										url={item.path}
										imageSrc="/pc2.jpg"
										isStatic={true}
									>
										{item.name}
									</LinkPreview>
								</Link>
							))}
						</div>
						<p>
							Copyright &copy; 2025 GrowSense. All rights
							reserved.
						</p>
					</div>
				</div>

				<div className="mb-5">
					<SocialList />
				</div>
			</div>

			{/* Bottom card border */}
			<div className="w-full mb-[-100px]">
				<Image
					src={cardBorder}
					alt="Card border bottom"
					width={1920}
					height={100}
					className="w-full h-auto object-cover rotate-180"
					priority
				/>
			</div>
		</footer>
	);
}
