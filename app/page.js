import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import ProductsList from "./_components/ProductsList";
import Testimonials from "./_components/Testimonials";
import FAQ from "./_components/Faq";
import BlogCardsDisplay from "./_components/BlogCardsDisplay";

export default function Home() {
	return (
		<div>
			<Hero />

			<div className="p-10 md:px-36 lg:px-48">
				<ProductsList />
				<BlogCardsDisplay page={"home"} />
				<Testimonials />
				<FAQ />
			</div>
		</div>
	);
}
