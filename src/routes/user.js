import express from "express"
import { isUser } from "../middleware/user.js"
import { userRegister, userLogin, getUser } from "../controller/user.js"


const userRoutes = express.Router()

userRoutes.post("/register", userRegister)
userRoutes.post("/login", userLogin)
userRoutes.get("/getuser/:id", getUser)


//VERIFY USER JWT TOKEN
 userRoutes.get("/user-verify", isUser, (req, res) => {
    res.status(200).send({ ok: true, message: "success" });
});

export default userRoutes;