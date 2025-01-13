import { createUserService, loginUserService } from "../model/userService.js";

export const registerController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await createUserService(email, password);
        if (!user) {
            console.log("User creation failed", user);
            res.status(400).json({ message: "User creation failed" });
        }
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.send({ message: "Internal server error", error: error.message });
    }
}

export const loginController = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginUserService(email, password);
    if (!user) {
        res.status(400).json({ message: "User login failed" });
    }
    res.status(200).json({ message: "User logged in successfully", user });
}