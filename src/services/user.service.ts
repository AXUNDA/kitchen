import { userRepository, itemRepository } from "../db";
import CustomError from "../utils/customError";

const userService = {
  async getVendors() {
    try {
      return await userRepository.getVendors();
    } catch (error) {
      throw error;
    }
  },

  async getVendor(id: string) {
    try {
      return await userRepository.getVendor(id);
    } catch (error) {
      throw error;
    }
  },

  async getMenuItem(id: string) {
    try {
      return await itemRepository.getMenuItem(id);
    } catch (error) {
      throw error;
    }
  },
};
export { userService };
