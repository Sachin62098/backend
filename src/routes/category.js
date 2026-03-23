import express from "express"
import { createCategory, getAllCategory, deleteCategory, } from "../controller/category.js"

const categoryRoutes = express.Router()

categoryRoutes.post("/create-category", createCategory)
categoryRoutes.get("/get-all-category", getAllCategory)
categoryRoutes.delete("/delete-category/:id", deleteCategory)


export default categoryRoutes