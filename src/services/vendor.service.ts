import { update } from "lodash";
import { itemRepository } from "../db";
import { item } from "../dto";
import CustomError from "../utils/customError";

const vendorService = {
  async createMenuItem(userId: string, dto: item) {
    try {
      return await itemRepository.createMenuItem(userId, dto);
    } catch (error) {
      console.log(error);
      throw new CustomError("something went wrong", 500);
    }
  },

  async deleteMenuItem(id: string, userId: string) {
    try {
      return await itemRepository.deleteMenuItem(id, userId);
    } catch (error) {
      console.log(error);
      throw new CustomError("something went wrong", 500);
    }
  },
  async updateMenuItem(id: string, dto: item, userId: string) {
    try {
      return await itemRepository.updateMenuItem(id, dto, userId);
    } catch (error) {
      throw new CustomError("something went wrong", 500);
    }
  },
};
export { vendorService };
