import { NextFunction, Request, Response } from "express";

const NotFound = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    success: false,
    message: "API Not Found",
    status: 404,
  });
};

export default NotFound;
