import React from "react";
import { BlogCard } from "./BlogCard";
import ZoomOutText from "@/components/ui/text/zoom-out";
import Blogs from "@/app/_mockData/Blogs";
import DoubleUnderline from "@/components/ui/text/double-underline";
import Link from "next/link";

const BlogCardsDisplay = ({ page }) => {
	let displayBlogPosts = () => {
		return page === "home" ? displayHomepage() : displayBlogPage();
	};

	let displayHomepage = () => {
		return (
			<div className="flex flex-col items-center gap-5">
				<DoubleUnderline className="self-end">
					<Link href="/blog">View all</Link>
				</DoubleUnderline>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
					{[1, 2, 3].map((_, index) => (
						<BlogCard key={index} />
					))}
				</div>
			</div>
		);
	};

	let displayBlogPage = () => {
		return (
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
				{Blogs.map((blogItem, index) => (
					<BlogCard
						key={index}
						imageIncluded={true}
						blogInformation={blogItem}
					/>
				))}
			</div>
		);
	};

	return (
		<div className={page === "blog" && "container mx-auto"}>
			<ZoomOutText text="Blogs Posts" />
			{displayBlogPosts()}
		</div>
	);
};

export default BlogCardsDisplay;
