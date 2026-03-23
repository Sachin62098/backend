import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            required: true,
            unique: true
        },
        slug: {
            type: String,
            required: true,
            lowercase: true,
        },
    }, { timestamps: true }
)

export default mongoose.model("Category", categorySchema)