import { update } from "lodash";
import { vendorService } from "../services/vendor.service";
import { Request, Response, NextFunction } from "express";

const vendorController = {
  async createMenuItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.user.id;
      const data = await vendorService.createMenuItem(userId, req.body);
      return res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  },

  async updateMenuItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.user.id;
      const { id } = req.params;
      const data = await vendorService.updateMenuItem(id, req.body, userId);
      return res.status(200).json({
        success: true,
        data,
      });
    } catch (error) {
      next(error);
    }
  },
  async deleteMenuItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = res.locals.user.id;
      const { id } = req.params;
      await vendorService.deleteMenuItem(id, userId);
      return res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  },
};

export { vendorController };
