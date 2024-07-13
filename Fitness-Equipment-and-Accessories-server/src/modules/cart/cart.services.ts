import { Types } from "mongoose";
import { TCarts } from "./cart.interface";
import { Cart } from "./cart.model";

//? save product into the cart collection
const cartProductSaveIntoDb = async (cartItem: TCarts) => {
  const existingProduct = await Cart.findOne({ productId: cartItem.productId });

  if (existingProduct) {
    return {
      success: false,
      message: "Product already in cart",
    };
    }
    
    
  const result = await Cart.create(cartItem);
  return result;
};

const getCartItemFromDb = async () => {
  const result = await Cart.find();
  return result;
};

const deleteCartItemFromDb = async (id: any) => {
  const result = await Cart.findByIdAndDelete(id);

  return result;
};

export const cartService = {
  cartProductSaveIntoDb,
  getCartItemFromDb,
  deleteCartItemFromDb,
};
