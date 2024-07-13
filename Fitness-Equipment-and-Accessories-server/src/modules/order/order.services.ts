import mongoose from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../products/product.model";
import { Order } from "./order.model";

const createOrderIntoDB = async (order: TOrder) => {
  // let result;
  const { products } = order;

  products.forEach(async (product) => {
    const objId = new mongoose.Types.ObjectId(product?.productId);
    const isAvailable = await Product.findOne({ _id: objId });
    // console.log(isAvailable, "data is available");
    if (!isAvailable) {
      return { message: "Order not found" };
    }
    const stock = isAvailable?.stock;
    console.log(stock, "stok ");
    const remaining = stock - product.quantity;
    if (stock < product.quantity) {
      return {
        message: "Insufficient quantity available in inventory",
        // stock,
      };
    }

    // console.log(result, "result is =<<");
    isAvailable.stock -= product.quantity;
    await isAvailable.save();
  });

  const result = await Order.create(order);
  console.log(result, "result is after order creation");
  return result;

  //   return result;
};

const getAllOrderIntoDB = async () => {
  const result = await Order.find();
  return result;
};

const getSingleOrderFromDB = async (email: any) => {
  const result = await Order.find({ email: email });
  return result;
};

export const orderServices = {
  createOrderIntoDB,
  getAllOrderIntoDB,
  getSingleOrderFromDB,
};
