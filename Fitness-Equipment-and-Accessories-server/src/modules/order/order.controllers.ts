import { RequestHandler } from "express";
import { orderServices } from "./order.services";

const createOrder: RequestHandler = async (req, res) => {
  try {
    const order = req.body;
    console.log(order);
    const result = await orderServices.createOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

const getAllOrder: RequestHandler = async (req, res) => {
  try {
    const { email } = req.query;
    console.log(email, "ab");
    if (email) {
      const result2 = await orderServices.getSingleOrderFromDB(email);
      return res.status(200).json({
        success: true,
        message: "order get by email was successful",
        data: result2,
      });
    }
    const result = await orderServices.getAllOrderIntoDB();
    // console.log(result);
    res.status(200).json({
      success: true,
      message: "get all order successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const orderController = {
  createOrder,
  getAllOrder,
};
