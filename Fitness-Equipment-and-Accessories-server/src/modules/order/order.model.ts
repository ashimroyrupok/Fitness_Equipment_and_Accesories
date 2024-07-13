import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";

const productSchema = new Schema({
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const OrderSchema = new Schema<TOrder>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
    house: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    zipCode: { type: Number, required: true },
    products: { type: [productSchema], required: true },
  },
  {
    timestamps: true,
  }
);

export const Order = model<TOrder>("order", OrderSchema);
