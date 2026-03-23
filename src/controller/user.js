import User from "../models/user.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken"

// REGISTER USER
export const userRegister = async (req, res) => {
    const { full_name, mobile, password } = req.body
    const findUser = await User.findOne({ mobile })

    try {
        if (findUser) {
            return res.status(409).json({
                message: "Mobile No. is already exist, you can login",
                success: false
            })
        }
        else {
            const user = new User({ full_name, mobile, password })
            user.password = await bcrypt.hash(password, 10)
            await user.save()
            res.status(201).json({
                success: true,
                message: "Register Successfully"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

// USER LOGIN
export const userLogin = async (req, res) => {
    try {
        const { mobile, password } = req.body;
        const user = await User.findOne({ mobile });

        if (!user) {
            return res.status(403).json({
                message: "Mobile No. not registered",
                success: false
            });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);

        if (!isPassEqual) {
            return res.status(403).json({
                message: "Invalid user",
                success: false
            });
        }

        const token = jsonwebtoken.sign(
            { mobile: user.mobile, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            token,
            _id: user._id
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

// GET USER
export const getUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (!user) {
            return res.status(403).json({
                message: "Profile Details not found",
                success: false
            })
        }
        res.status(201).json({
            success: true,
            message: "User Profile find success",
            user: {
                _id: user._id,
                full_name: user.full_name,
                email: user.email,
            },
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}
