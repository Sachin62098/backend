import Order from '../models/order.js'

export const createOrder = async (req, res) => {
    try {
        console.log(req.body)
        const { _id, full_name, mobile_number, village, post, distric, state, pincode, total_amount, product } = req.body
        const order = new Order({
            userId : _id,
            full_name,
            mobile_number,
            village,
            post,
            distric,
            state,
            pincode,
            total_amount,
            order_number: Math.floor((Math.random() * 1000000000000) + 1),
            products: product.map((item) => item)
        })
        await order.save()

        res.status(200).json({
            success: true,
            message: "Order Placed Successfully"
        })
    } catch (error) {
        res.status(500).json({ error })
    }
}

// GET ORDER FOR USER
export const getOrder = async (req, res) => {
    try {
        const userId = req.params._id
        const order = await Order.find({ userId }).sort({ createdAt: -1 })
        res.status(200).json({
            success: true,
            order: order
        })
    } catch (error) {
        res.status(500).json({ error })
    }
} 