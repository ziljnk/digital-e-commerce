import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserListing from "./_components/UserListing";
import PurchasedHistory from "./_components/PurchasedHistory";
import Analytics from "./_components/Analytics";

const Dashboard = () => {
	return (
		<div className="mt-36">
			<h2 className="font-bold text-2xl">Dashboard</h2>
			<Tabs defaultValue="account" className="mt-5">
				<TabsList>
					<TabsTrigger value="listing">Listing</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="purchased">Purchased</TabsTrigger>
				</TabsList>
				<TabsContent value="listing">
					<UserListing />
				</TabsContent>
				<TabsContent value="analytics">
					<Analytics />
				</TabsContent>
				<TabsContent value="purchased">
					<PurchasedHistory />
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Dashboard;
