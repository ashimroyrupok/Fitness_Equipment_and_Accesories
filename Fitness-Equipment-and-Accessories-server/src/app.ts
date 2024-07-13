import express, { Application, Request, Response } from "express";
import cors from "cors";

import NotFound from "./middleware/NotFound";
import GlobalErrorHandler from "./middleware/GlobalErrorHandler";
import productRouter from "./modules/products/product.routes";
import cartRouter from "./modules/cart/cart.routes";
import { orderRoutes } from "./modules/order/order.routes";

const app: Application = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fitness-equipment-and-accessories-client.vercel.app",
    ],
    // credentials: true,
    // methods: ["GET", "POST", "PATCH", "DELETE"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//routes
app.use("/api/v1", productRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Fitness Equipment and Accessories Project");
});

app.use(GlobalErrorHandler);
app.use(NotFound);

export default app;
