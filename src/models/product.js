import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            lowercase: true
        },
        company_name: {
            type: String,
            required: true,
        },
        product_title: {
            type: String,
            required: true,
        },
        slug: {
            type: String,
            required: true,
            lowercase: true,
        },
        price: {
            type: Number,
            required: true,
        },
        sales_price: {
            type: Number,
            required: true,
        },
        qty: {
            type: String,
        },
        image: {
            type: String
        }
        ,
        description: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

export default mongoose.model("Product", productSchema);
