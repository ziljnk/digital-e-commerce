import { NextResponse } from "next/server";
import { db } from "@/configs/db";
import { productsTable, usersTable } from "@/configs/schema.js";
import { asc, desc, eq, getTableColumns, like } from "drizzle-orm";

export async function POST(req) {
	const { limit, offset, searchText, sort } = await req.json();
	try {
		const result = await db
			.select({
				...getTableColumns(productsTable),
				user: {
					name: usersTable.name,
					image: usersTable.image,
				},
			})
			.from(productsTable)
			.innerJoin(
				usersTable,
				eq(productsTable.createdBy, usersTable.email)
			)
			.where(like(productsTable.title, "%" + searchText + "%"))
			.orderBy(
				sort.order === "desc"
					? desc(productsTable[sort.field])
					: asc(productsTable[sort.field])
			)
			.limit(Number(limit))
			.offset(offset);

		return NextResponse.json(result);
	} catch (e) {
		return NextResponse.json({ error: "Internal Server Error" });
	}
}
