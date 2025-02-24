"use client";
import ProductCardItem from "@/app/_components/ProductCardItem";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function UserListing() {
	const [listing, setListing] = useState([]);
	const [loading, setLoading] = useState(false);
	const { user } = useUser();

	useEffect(() => {
		user && getUserProductList();
	}, [user]);

	const getUserProductList = async () => {
		setLoading(true);
		const { data } = await axios.get(
			"/api/products?email=" + user?.primaryEmailAddress?.emailAddress
		);
		console.log(data);
		setLoading(false);
		setListing(data.result);
	};

	return (
		<div className="mt-5">
			<h2 className="font-bold text-xl flex justify-between items-center">
				Listing
				<Link href={"/add-product"}>
					<Button>+ Add New Product</Button>
				</Link>
			</h2>

			<div>
				{listing?.length == 0 && (
					<h2 className="font-medium text-2xl mt-10 text-center text-gray-300">
						No Listing Found.
					</h2>
				)}

				<div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
					{listing.map((product, index) => (
						<ProductCardItem key={index} product={product} />
					))}
				</div>
			</div>
		</div>
	);
}

export default UserListing;
