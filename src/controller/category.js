import Category from "../models/category.js"
import slugify from "slugify";

//CREATE CATEGORY
export const createCategory = async (req, res) => {
    console.log(req.body)
    try {
        const { category_name } = req.body
        
        const existingCategory = await Category.findOne({ category_name });
        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: "Category Already Exisits"
            })
        }
        const category = new Category({
            category_name,
            slug: slugify(category_name),
        })

        await category.save()
        res.status(200).json({
            success: true,
            message: "Category Created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

// GET ALL CATEGORY
export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find().sort({ createdAt: -1 })
        res.status(200).json({
            category: category
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "category get error"
        })
    }
}


// DELETE CATEGORY
export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.params.id)
        const categoryExist = await Category.findById(id)
        if (!categoryExist) {
            return res.status(404).json({
                success: false,
                msg: "Category not found"
            })
        }
        await Category.findByIdAndDelete(id)
        res.status(201).json({
            success: false,
            message: "Category deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "category delete error"
        })
    }
}