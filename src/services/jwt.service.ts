import jwt from "jsonwebtoken";
import CustomError from "../utils/customError";
import config from "../common/config";

const jwtService = {
  async sign(data: any) {
    try {
      return await jwt.sign(data, config.JWT_KEY as string, {
        expiresIn: "3d",
      });
    } catch (error: any) {
      throw new CustomError(error.message, 409);
    }
  },

  async verify(token: string) {
    try {
      return await jwt.verify(token, config.JWT_KEY as string);
    } catch (error: any) {
      throw new CustomError("un-authorized", 409);
    }
  },
};

export { jwtService };
