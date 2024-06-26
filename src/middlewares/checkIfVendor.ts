import { userRepository } from "../db";

import { NextFunction, Request, Response } from "express";
import config from "../common/config";

export default async function checkIfVendor(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { id } = res.locals.user;
    const user = await userRepository.getVendor(id);

    if (!user.isVendor)
      return res.status(500).json({
        success: false,
        message: "you are not a vendor",
      });
    return next();
  } catch (err) {
    next(err);
  }
}
