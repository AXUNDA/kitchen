import { item } from "../../dto";
import CustomError from "../../utils/customError";
import { VendorItem } from "../models";

const itemRepository = {
  async createMenuItem(userId: string, dto: item) {
    console.log({ userId });

    const item = await VendorItem.create({
      UserId: userId,

      ...dto,
    });
    return item;
  },
  async updateMenuItem(itemId: string, dto: item, userId: string) {
    const data = await VendorItem.update(dto, {
      where: {
        id: itemId,
        userId,
      },
    });

    if (data[0] == 0) throw new CustomError("menu item does not exist", 500);
    return data;
  },
  async deleteMenuItem(itemId: string, userId: string) {
    const data = await VendorItem.destroy({
      where: {
        id: itemId,
        UserId: userId,
      },
    });
    if (data == 0) throw new CustomError("menu item does not exist", 500);

    return data;
  },
  async getMenuItem(itemId: string) {
    const item = await VendorItem.findByPk(itemId);
    return item;
  },
  async getAllMenuItems(userId: string) {
    const items = await VendorItem.findAll({
      where: {
        UserId: userId,
      },
    });
    return items;
  },
};

export { itemRepository };
