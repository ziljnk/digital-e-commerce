import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DeleteConfirmationDialog = ({ children, deleteProduct }) => {
	return (
		<Dialog>
			<DialogTrigger
				className="flex gap-2 hover:bg-slate-100 p-2 rounded-md cursor-pointer text-red-600 w-full"
				onClick={(e) => {
					e.stopPropagation();
					console.log("clicked");
				}}
			>
				{children}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						<>
							<h2>Do you really want to delete this products?</h2>
							<div className="flex gap-5 justify-end mt-5">
								<Button>Close</Button>
								<Button
									variant="destructive"
									onClick={deleteProduct}
								>
									Delete
								</Button>
							</div>
						</>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteConfirmationDialog;
