import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { productServices } from "./product.services";

// create a new product and save it into the database

const createProduct: RequestHandler = catchAsync(async (req, res) => {
  const product = req.body;

  const result = await productServices.productSaveIntoDb(product);

  res.status(200).json({
    success: true,
    message: " Product Added Successfully",
    data: result,
  });
});

// get all products and get filtered products from the database

const getAllProudcts: RequestHandler = catchAsync(async (req, res) => {
  const result = await productServices.getProductsFromDb(req.query);

  res.status(200).json({
    success: true,
    message: " Product retrived Successfully",
    data: result.res,
    meta: result.meta,
  });
});

//get single product from the database
const getSingleProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await productServices.getSingleProductFromDb(id);

  res.status(200).json({
    success: true,
    message: " single item are retrive successfully",
    data: result,
  });
});

const deleteProduct: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log(id,)

  const result = await productServices.deleteProductFromDb(id);
  res.status(200).json({
    success: true,
    message: "Item deleted successfully",
    data: result,
  });
});

const updateProduct: RequestHandler = catchAsync(async (req, res) => {
  const payload = req.body;

  const result = await productServices.updateProductInDb(payload);

  res.status(200).json({
    success: true,
    message: "item updated successfully",
    data: result,
  });
});

export const productControllers = {
  createProduct,
  getAllProudcts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
