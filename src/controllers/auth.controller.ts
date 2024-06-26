import { authService } from "../services/auth.service";
import { Request, Response, NextFunction } from "express";

const authController = {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.signup(req.body);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  },
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await authService.login(req.body);
      return res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  },
};

export { authController };
