import React from "react";
import { BlogCard } from "./BlogCard";

const BlogCardsDisplay = () => {
	return (
		<div>
			<h2 className="font-bold text-3xl mb-5">Blogs</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{[1, 2, 3].map((_, index) => (
					<BlogCard />
				))}
			</div>
		</div>
	);
};

export default BlogCardsDisplay;
