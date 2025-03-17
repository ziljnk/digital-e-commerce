import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "mhbl4t4i",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});
