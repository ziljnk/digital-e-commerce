"use client";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import faqList from "../_mockData/FAQ";
import SplitText from "@/components/ui/text/split-text";

const FAQ = () => {
	return (
		<div className="flex items-center justify-center flex-col">
			{/* <h2 className="font-bold text-3xl mb-5">
				Frequently Asked Questions
			</h2> */}
			<SplitText text="FAQ" />
			<Accordion type="single" collapsible className="w-full mt-5">
				{faqList.map((faq, index) => (
					<AccordionItem value={index + 1} key={index}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQ;
