import express, { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import vendorRoutes from "./vendor.routes";
const router: Router = express.Router();

router.use("/auth", authRoutes);
router.use("/store", vendorRoutes);
router.use("/vendors", userRoutes);

export { router };
