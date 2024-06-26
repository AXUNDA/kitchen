import { Request, Response, NextFunction } from "express";
import { userService } from "../services/user.service";

const userController = {
  async getVendors(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.getVendors();
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  },
  async getVendor(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await userService.getVendor(id);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  },

  async getMenuItem(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await userService.getMenuItem(id);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  },
};

export { userController };
