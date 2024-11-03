import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { removeFromDatabase, uploadToDatabase } from "../utils/sessionToDb";

interface RequestFromRoblox {
	userId: number;
	playerJoined: boolean;
}

export const runtime = "edge";

export async function POST(req: NextRequest) {
	const data: RequestFromRoblox = await req.json();
	const { userId, playerJoined } = data;

	if (playerJoined) {
		const code = randomUUID().toString();
		uploadToDatabase({ code, userId });
		return Response.json({ code });
	} else {
		removeFromDatabase(userId);
		console.log("Player has left!");
	}

	return new Response();
}
