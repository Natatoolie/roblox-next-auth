import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
	userCode: String,
	userId: Number,
});

const Session =
	mongoose.models.Session || mongoose.model("Session", sessionSchema);
export default Session;
