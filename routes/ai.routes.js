import express from "express";
import { getBookInsights } from "../controller/ai.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { placeOrder,getOrderHistory } from "../controller/order.controller.js";
const router = express.Router();

router.post("/placeorder",protectRoute, placeOrder)
router.get("/history",protectRoute, getOrderHistory)
router.get("/:bookId", protectRoute, getBookInsights);
export default router;