import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { cartService } from "./cart.services";

const createCart: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await cartService.cartProductSaveIntoDb(data);
  //save cart in the cart collection

  res.status(200).json({
    success: true,
    message: "Cart created successfully",
    data: result,
  });
});

const getAllCart: RequestHandler = catchAsync(async (req, res) => {
  const result = await cartService.getCartItemFromDb();
  //save cart in the cart collection

  res.status(200).json({
    success: true,
    message: "Cart retrived successfully",
    data: result,
  });
});

const deleteCartItem: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await cartService.deleteCartItemFromDb(id);

  res.status(200).json({
    success: true,
    message: "Cart item deleted successfully",
    data: result,
  });
});

export const cartControllers = { createCart, getAllCart, deleteCartItem };
