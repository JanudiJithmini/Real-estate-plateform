import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import sendEmail from "../utils/sendEmail.js";

// Register a new user
export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, 10);

       const verificationToken = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit verification token
        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            isApproved: role === "seller" ? false : true, // Auto-approve admins
            verificationToken,
        });
        try {
            
        } catch (error) {
            
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};