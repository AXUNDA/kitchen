import { item } from "../../dto";
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
    return await VendorItem.update(dto, {
      where: {
        id: itemId,
        userId,
      },
    });
    return { item: dto };
  },
  async deleteMenuItem(itemId: string, userId: string) {
    await VendorItem.destroy({
      where: {
        id: itemId,
        UserId: userId,
      },
    });
    return;
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
