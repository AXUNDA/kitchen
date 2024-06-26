import express, { Router } from "express";
import { userController } from "../controllers";
import checkToken from "../middlewares/checkToken";
const router: Router = express.Router();
import { validate } from "../middlewares/jsonValidator";

router.use(checkToken);

router.get("/", userController.getVendors);
router.get("/:id", validate.UUID, userController.getVendor);
router.get("/menu_item/:id", validate.UUID, userController.getMenuItem);

export default router;
