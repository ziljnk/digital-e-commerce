import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const ProductCardItem = ({ product }) => {
	return (
		<div>
			<Card className="p-3">
				<Image
					src={product?.imageUrl}
					alt={product.title}
					width={400}
					height={300}
				/>
				<div>
					<h2 className="font-bold text-xl">{product.title}</h2>
					<h2 className="font-bold text-2xl text-primary-500">
						${product.price}
					</h2>
					<div className="mt-3 sm:flex justify-between items-center">
						<div className="flex gap-2 items-center">
							<Image
								src={product?.user?.image}
								alt={product?.user?.name}
								width={20}
								height={20}
								className="rounded-full"
							/>
							<h2 className="text-sm text-gray-400">
								{product?.user?.name}
							</h2>
						</div>

						<Button size="sm" className="mt-1">
							Add to Cart
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default ProductCardItem;
