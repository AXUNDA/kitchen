import express, { Router } from "express";
import { vendorController } from "../controllers";
import checkToken from "../middlewares/checkToken";
const router: Router = express.Router();
import { validate } from "../middlewares/jsonValidator";
import checkIfVendor from "../middlewares/checkIfVendor";

router.use(checkToken);
router.use(checkIfVendor);

router.post("/", validate.CreateMenuItem, vendorController.createMenuItem);
router.get("/", vendorController.getAllMenuItems);
router.patch(
  "/:id",
  [validate.UUID, validate.UpdateMenuItem],
  vendorController.updateMenuItem,
);
router.delete("/:id", validate.UUID, vendorController.deleteMenuItem);

export default router;
