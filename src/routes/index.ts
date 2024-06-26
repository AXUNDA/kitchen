import express, { Router, Request, Response, NextFunction } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import vendorRoutes from "./vendor.routes";
const router: Router = express.Router();

router.use("/api/auth", authRoutes);
router.use("/api/store", vendorRoutes);
router.use("/api/vendors", userRoutes);
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: "active",
  });
});

export { router };
