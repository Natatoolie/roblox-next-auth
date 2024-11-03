import mongoose from "mongoose";
import connectDB from "./db";
import Session from "../models/sessionModel";

export async function uploadToDatabase({
	code,
	userId,
}: {
	code: string;
	userId: number;
}) {
	await connectDB();

	try {
		const newSession = new Session({
			userCode: code,
			userId: userId,
		});
		await newSession.save();
	} catch (err) {
		console.warn(err);
	}
}

export async function removeFromDatabase(userId: number) {
	await connectDB();

	try {
		await Session.findOneAndDelete({ userId });
	} catch (err) {
		console.warn(err);
	}
}

export async function getUserFromDatabase(code: number) {
	await connectDB();

	try {
		const session = await Session.findOne({ userCode: code });
		return session;
	} catch (err) {
		console.warn(err);
	}
	return null;
}
