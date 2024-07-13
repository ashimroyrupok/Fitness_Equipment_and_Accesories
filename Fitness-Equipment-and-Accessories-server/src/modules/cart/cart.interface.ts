import { Types } from "mongoose";

export type TCarts = {
  productId: Types.ObjectId;
  quantity: number;
};
