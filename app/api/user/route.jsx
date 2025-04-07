import { db } from "@/configs/db";
import { usersTable } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
	const { user } = await req.json();
	//Check Is User already exists

	const userData = await db
		.select()
		.from(usersTable)
		.where(eq(usersTable.email, user?.primaryEmailAddress.emailAddress));

	if (userData?.length <= 0) {
		//If not then insert new user to DB
		const result = await db
			.insert(usersTable)
			.values({
				id: user?.id,
				name: user?.fullName,
				email: user?.primaryEmailAddress.emailAddress,
				image: user?.imageUrl,
			})
			.returning(usersTable);

		return NextResponse.json(result[0]);
	}
	//If not exists, create user

	return NextResponse.json(userData[0]);
}
