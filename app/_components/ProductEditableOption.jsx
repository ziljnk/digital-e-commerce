import React from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { LineChartIcon, PenBoxIcon, Trash2Icon } from "lucide-react";

const ProductEditableOption = ({ children }) => {
	return (
		<Popover>
			<PopoverTrigger>{children}</PopoverTrigger>
			<PopoverContent>
				<ul>
					<li className="flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
						<PenBoxIcon /> Edit
					</li>

					<li className="flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer">
						<LineChartIcon /> Analytics
					</li>

					<li className="flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer text-red-600">
						<Trash2Icon /> Delete
					</li>
				</ul>
			</PopoverContent>
		</Popover>
	);
};

export default ProductEditableOption;
