import * as jwt from "jsonwebtoken";

import { NextFunction, Request, Response } from "express";
import config from "../common/config";

export default function checkToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.sendStatus(401); // Unauthorized
    jwt.verify(
      token,
      config.JWT_KEY as string,
      async (err: any, payload: any) => {
        if (err) {
          return res.sendStatus(403); // forbidden
        }

        if (!payload) {
          return res.sendStatus(403); // forbidden
        }
        res.locals.user = payload;
        return next();
      },
    );
  } catch (err) {
    next(err);
  }
}
