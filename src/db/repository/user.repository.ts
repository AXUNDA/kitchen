import { createUser } from "../../dto";
import { User, VendorItem } from "../models";
import * as argon2 from "argon2";

const userRepository = {
  async createUser(dto: createUser) {
    const user = await User.create({
      email: dto.email.toLowerCase(),
      password: await argon2.hash(dto.password),
      name: dto.name,
      isVendor: dto.isVendor || false,
      address: dto.address,
      phone: dto.phone,
    });
    return { id: user.id, isVendor: dto.isVendor };
  },
  async getUser(email: string) {
    return await User.findOne({
      where: {
        email: email.toLowerCase(),
      },
    });
  },
  async getVendors() {
    return await User.findAll({
      where: {
        isVendor: true,
      },
      attributes: { exclude: ["password"] },
    });
  },
  async getVendor(id: string) {
    return await User.findByPk(id, {
      attributes: { exclude: ["password"] },
      include: {
        model: VendorItem,
        as: "MenuItems",
      },
    });
  },
};

export { userRepository };
