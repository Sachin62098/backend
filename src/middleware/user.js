import jsonwebtoken from "jsonwebtoken"

export const isUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (token) {
            const decode = jsonwebtoken.verify(token, process.env.JWT_SECRET)
            req.user = decode
            next();
        } else {
            return
        }
    } catch (error) {
        console.log(error);
    }
}

