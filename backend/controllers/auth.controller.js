import "dotenv/config";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { authModel } from "../models/auth.model.js";
import { isValidEmail } from "../utils/validators/email.validate.js";

const login = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const user = await authModel.getUserByEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const payload = { email, id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.json({ email, token });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
};

const register = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const exists = await authModel.getUserByEmail(email);
    if (exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = { email, password, id: nanoid() };
    await authModel.addUser(newUser);

    const token = jwt.sign({ email, id: newUser.id }, process.env.JWT_SECRET);

    return res.json({ email, token });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
};

const me = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await authModel.getUserByEmail(email);
    return res.json({ email, id: user.id });
  } catch {
    return res.status(500).json({ error: "Server error" });
  }
};

export const authController = {
  login,
  register,
  me,
};
