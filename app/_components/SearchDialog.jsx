import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const SearchDialog = ({ isOpen, onClose }) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (isOpen && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	if (typeof window === "undefined") return null;

	return createPortal(
		<AnimatePresence>
			{isOpen && (
				<div className="fixed inset-0 z-[9999]" onClick={onClose}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="absolute inset-0 bg-black/50"
					/>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="absolute inset-0 flex flex-col items-center justify-start p-4"
					>
						<div
							className="w-full max-w-2xl bg-white rounded-lg shadow-xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center p-4 border-b">
								<Search className="h-5 w-5 text-gray-500 mr-2" />
								<Input
									ref={inputRef}
									type="text"
									placeholder="Search..."
									className="flex-1 border-0 focus-visible:ring-0 text-lg"
								/>
								<button
									onClick={onClose}
									className="ml-2 p-2 hover:bg-gray-100 rounded-full"
								>
									<X className="h-5 w-5 text-gray-500" />
								</button>
							</div>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>,
		document.body
	);
};

export default SearchDialog;
