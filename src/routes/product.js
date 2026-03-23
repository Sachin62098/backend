import express from "express"
import {
    createProduct,
    getAllProduct,
    getProductDetails,
    getProduct,
    searchProduct
} from "../controller/product.js"

const productRoutes = express.Router()

productRoutes.post("/create-product", createProduct)
productRoutes.get("/", getAllProduct)
productRoutes.get("/get-product-details/:slug", getProductDetails)
productRoutes.get("/get-product/:slug", getProduct)
productRoutes.get("/search", searchProduct)




export default productRoutes;