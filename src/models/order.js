import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        full_name: {
            type: String
        },
        mobile_number: {
            type: String
        },
        village: {
            type: String
        },
        post: {
            type: String
        },
        distric: {
            type: String
        },
        state: {
            type: String
        },
        pincode: {
            type: String
        },
        total_amount: {
            type: Number
        },
        order_number: {
            type: String
        },
        products: [],
        status: {
            type: String,
            default: "Process",
            enum: ["Process", "Packing", "Shipped", "Delivered", "Cancel"]
        }

    }, { timestamps: true }
)

export default mongoose.model("Order", orderSchema)