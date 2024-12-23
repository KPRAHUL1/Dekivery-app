import express from "express";
import { addToCart, removeFrom, getCart } from "../controllers/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

// Protected routes
cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFrom);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;
