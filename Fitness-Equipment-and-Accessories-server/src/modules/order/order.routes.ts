import express from "express";
import { orderController } from "./order.controllers";

const router = express.Router();

router.post("/order/create-order", orderController.createOrder);
router.get("/orders", orderController.getAllOrder);

export const orderRoutes = router;
