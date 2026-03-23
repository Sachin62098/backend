import express from "express"

import {
    createOrder,
    getOrder
} from "../controller/order.js"

const orderRoutes = express.Router()

orderRoutes.post("/create-order", createOrder)
orderRoutes.get("/get-order/:_id", getOrder)

export default orderRoutes;