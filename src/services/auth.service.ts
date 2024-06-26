import { jwtService } from "./jwt.service";
import { userRepository } from "../db/";
import { createUser, loginDto } from "../dto";
import CustomError from "../utils/customError";
import * as argon from "argon2";

const authService = {
  async signup(dto: createUser) {
    try {
      const user = await userRepository.createUser(dto);
      const token = await jwtService.sign(user);
      return { access_token: token };
    } catch (error: any) {
      console.log(error);
      if (error.name == "SequelizeUniqueConstraintError") {
        throw new CustomError(
          `user with email ${dto.email} already exists`,
          409,
        );
      } else {
        throw new CustomError("something went wrong", 500);
      }
    }
  },
  async login(dto: loginDto) {
    try {
      const user = await userRepository.getUser(dto.email);
      if (!user && (await argon.verify(user.password, dto.password)))
        throw new CustomError("invalid credentials", 401);
      const token = await jwtService.sign({
        id: user.id,
        isVendor: user.isVendor,
      });
      return { access_token: token };
    } catch (error) {
      throw new CustomError("something went wrong", 500);
    }
  },
};

export { authService };
