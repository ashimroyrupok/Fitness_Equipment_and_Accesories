import { Router } from "express";
import { cartControllers } from "./cart.controller";

const cartRouter = Router();

cartRouter.post("/create-cart", cartControllers.createCart);
cartRouter.get("/carts", cartControllers.getAllCart);
cartRouter.delete("/carts/:id", cartControllers.deleteCartItem);

export default cartRouter;
