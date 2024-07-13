import { Router } from "express";
import { productControllers } from "./product.controller";

const productRouter = Router();

productRouter.post("/create-product", productControllers.createProduct);
productRouter.get("/products", productControllers.getAllProudcts);
productRouter.get("/products/:id", productControllers.getSingleProduct);
productRouter.delete("/products/:id", productControllers.deleteProduct);
productRouter.patch("/product/update", productControllers.updateProduct);

export default productRouter;
