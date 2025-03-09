import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import faqList from "../_mockData/FAQ";

const FAQ = () => {
	return (
		<div>
			<h2 className="font-bold text-3xl mb-5">
				Frequently Asked Questions
			</h2>
			<Accordion type="single" collapsible>
				{faqList.map((faq, index) => (
					<AccordionItem value="item-1" key={index}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};

export default FAQ;
