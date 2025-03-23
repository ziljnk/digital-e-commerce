"use client";
import React from "react";
import FuzzyText from "@/components/ui/text/fuzzy";

const ErrorPage = () => {
	return (
		<div className="w-[100vw] h-[100vh] px-48 fixed top-0 left-0 flex justify-center items-center bg-[#060606]">
			<FuzzyText
				baseIntensity={0.5}
				hoverIntensity={1}
				enableHover={true}
			>
				404 | Page Not Found
			</FuzzyText>
		</div>
	);
};

export default ErrorPage;
