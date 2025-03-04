import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useRouter } from "next/navigation.js";

const ProductCardItem = ({ product, editable = false, user, purchased }) => {
	const router = useRouter();
	return (
		product && (
			<div
				onClick={() => router.push(`/explore/${product?.id}`)}
				className="cursor-pointer"
			>
				<Card className="p-3">
					<Image
						src={product?.imageUrl}
						alt={product.title}
						width={400}
						height={300}
						className="h-[180px] object-cover"
					/>
					<div>
						<h2 className="font-bold text-sm md:text-xl line-clamp-1">
							{product.title}
						</h2>
						<h2 className="font-bold text-2xl text-yellow-500">
							${product.price}
						</h2>
						<div className="mt-3 sm:flex justify-between items-center">
							{!purchased && (
								<>
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

									<AddToCartBtn
										editable={editable}
										product={product}
									/>
								</>
							)}
							{purchased && (
								<Link href={product?.fileUrl}>
									<Button className="w-full bg-green-700 text-white">
										Download Content
									</Button>
								</Link>
							)}
						</div>
					</div>
				</Card>
			</div>
		)
	);
};

export default ProductCardItem;
