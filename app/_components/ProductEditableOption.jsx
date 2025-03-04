import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { LineChartIcon, PenBoxIcon, Trash2Icon } from "lucide-react";
import DeleteConfirmationDialog from "./DeleteConfirmationDialog.jsx";
import axios from "axios";

const ProductEditableOption = ({ children, product }) => {
	const deleteProduct = async () => {
		const result = await axios.delete("/api/products?id=" + product?.id);
		console.log(result);
		window.location.reload();
	};

	return (
		<Popover>
			<PopoverTrigger onClick={(e) => e.stopPropagation()}>
				{children}
			</PopoverTrigger>
			<PopoverContent>
				<ul>
					<li className="flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
						<PenBoxIcon /> Edit
					</li>

					<li>
						<DeleteConfirmationDialog deleteProduct={deleteProduct}>
							<Trash2Icon /> Delete
						</DeleteConfirmationDialog>
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	);
};

export default ProductEditableOption;
