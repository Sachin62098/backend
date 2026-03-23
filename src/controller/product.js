import Product from "../models/product.js";
import slugify from "slugify";

// CREATE PRODUCT
export const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const { category, company_name, product_title, price, sales_price, qty, description, image } = req.body
        const product = new Product({
            category,
            company_name,
            product_title,
            slug: slugify(product_title),
            price,
            sales_price,
            qty,
            description,
            image
        })
        await product.save()

        res.status(200).json({
            success: true,
            message: "Product Created Success"
        })
    } catch (error) {
        res.status(500).json({ error })
    }
}

//GET ALL PRODUCT
export const getAllProduct = async (req, res) => {
    try {
        const product = await Product.find().sort({ createdAt: -1 })
        if (!product) {
            return res.status(403).json({
                message: "Product Details not found"
            })
        }
        res.status(201).json({
            message: "Product Details find success",
            product: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

// GET PRODUCT DETAILS
export const getProductDetails = async (req, res) => {
    try {
        const slug = req.params.slug
        const product = await Product.find({ slug: slug })
        if (!product) {
            return res.status(404).json({
                message: "Product Details not found"
            })
        }
        res.status(200).json({
            message: "Product Details find success",
            product: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

// FILTER PRODUCT BY CATEGORY
export const getProduct = async (req, res) => {
    try {
        const slug = req.params.slug
        const product = await Product.find({ category: slug }).sort({ createdAt: -1 })
        if (!product) {
            return res.status(404).json({
                message: "Product Details not found"
            })
        }
        res.status(200).json({
            message: "Product Details find success",
            product: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}

// SEARCH PRODUCT
export const searchProduct = async (req, res) => {
    try {
        const keyword = req.query.keyword
        if (keyword) {
            const product = await Product.find({ product_title: { $regex: keyword, $options: "i" } }).sort({ createdAt: -1 })
            res.status(200).json({
                message: "Product Details find success",
                product
            })
        } else {
            res.status(200).json({ product: [] })
        }


    } catch (error) {
        res.status(500).json({
            message: "Server Error"
        })
    }
}