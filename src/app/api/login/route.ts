import { getUserFromDatabase } from "@/app/utils/sessionToDb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const data = await req.json();
	const { code } = data;

	const user = await getUserFromDatabase(code);
	if (user) {
		cookies().set("id", user.userId);
		return Response.json({ success: true });
	}
	console.log(user);

	// Check to see if its in database

	return Response.error();
}
