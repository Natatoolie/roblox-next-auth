import mongoose from "mongoose";

export default async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI!);
	} catch (connectErr) {
		console.warn(connectErr);
	}
}
