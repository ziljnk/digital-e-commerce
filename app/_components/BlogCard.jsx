"use client";
import CursorTracker from "@/components/ui/container/cursor-tracker";
import CaseStudyCard from "@/components/ui/case-study-card";

export function BlogCard({ imageIncluded = false, blogInformation }) {
	return (
		<>
			{imageIncluded ?
				<CaseStudyCard
					type={"content"}
					title={blogInformation.title}
					category={blogInformation.category}
					image={blogInformation.image}
					logo={blogInformation.logo}
					link={blogInformation.link}
				/>
			:	<CursorTracker />}
		</>
	);
}
