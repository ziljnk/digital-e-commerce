import ZoomOutText from "@/components/ui/text/zoom-out";
import React from "react";
import { BlogCard } from "@/app/_components/BlogCard";
import BlogCardsDisplay from "@/app/_components/BlogCardsDisplay";

const Blog = () => {
	return (
		<div className="container mx-auto">
			<BlogCardsDisplay page="blog" />
		</div>
	);
};

export default Blog;
