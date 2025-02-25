import React from "react";
import ProductCardItem from "./ProductCardItem";

const DisplayProductList = ({ productList }) => {
	return (
		<div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-5">
			{productList.length > 0
				? productList.map((product, index) => (
						<ProductCardItem
							product={product}
							key={index}
						/>
				  ))
				: [1, 2, 3, 4, 5, 6].map((_, index) => (
						<div
							key={index}
							className="h-[200px] w-full bg-slate-200 rounded-lg animate-pulse"></div>
				  ))}
		</div>
	);
};

export default DisplayProductList;
