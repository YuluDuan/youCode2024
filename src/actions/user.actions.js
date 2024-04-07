"use server"

import connectDB from "@/db/dbConnect";
import { UserSchema, ItemSchema, PostSchema } from "@/db/schema";

export async function getUsersAction() {
	await connectDB();
    try {
        const posts = await UserSchema.find({});
        return { success: true, error: null, data: posts };
    } catch (err) {
        return { success: false, error: err.message, data: null };
    }
}