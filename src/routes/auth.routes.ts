import express, { Router } from "express";
import { authController } from "../controllers";
const router: Router = express.Router();
import { validate } from "../middlewares/jsonValidator";

router.post("/", validate.Signup, authController.signup);
router.post("/login", validate.Login, authController.login);

export default router;
