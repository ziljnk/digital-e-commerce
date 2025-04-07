import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React, { useState } from "react";
import SearchDialog from "./SearchDialog";

const SearchButton = () => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setIsSearchOpen(true)}
			>
				<Search className="h-5 w-5" />
				<span className="sr-only">Search</span>
			</Button>

			<SearchDialog
				isOpen={isSearchOpen}
				onClose={() => setIsSearchOpen(false)}
			/>
		</>
	);
};

export default SearchButton;
