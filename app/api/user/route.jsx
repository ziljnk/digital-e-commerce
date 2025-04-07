import { db } from "@/configs/db";
import { usersTable } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
	try {
		const { user } = await req.json();

		if (!user || !user.primaryEmailAddress?.emailAddress) {
			return NextResponse.json(
				{ error: "Invalid user data" },
				{ status: 400 }
			);
		}

		// Check if user already exists
		const userData = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.email, user.primaryEmailAddress.emailAddress));

		if (userData?.length <= 0) {
			// Insert new user
			const result = await db
				.insert(usersTable)
				.values({
					// id: user.id,
					name: user.fullName,
					email: user.primaryEmailAddress.emailAddress,
					image: user.imageUrl,
				})
				.returning();

			return NextResponse.json(result[0], { status: 201 });
		}

		// Return existing user
		return NextResponse.json(userData[0], { status: 200 });
	} catch (error) {
		console.error("Error in POST /api/user:", error);
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
