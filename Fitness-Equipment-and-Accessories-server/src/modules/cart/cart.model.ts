import { model, Schema } from "mongoose";
import { TCarts } from "./cart.interface";

const cartSchema = new Schema<TCarts>(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "products",
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

export const Cart = model("carts", cartSchema);
