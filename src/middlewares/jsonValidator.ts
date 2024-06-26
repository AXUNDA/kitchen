import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validate = {
  async Signup(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6).max(20),
      address: Joi.string().required(),
      phone: Joi.string().required(),

      isVendor: Joi.boolean().optional(),
    });
    const result = schema.validate(req.body);

    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    return next();
  },

  async Login(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });
    const result = schema.validate(req.body);

    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    return next();
  },
  async CreateMenuItem(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
    });
    const result = schema.validate(req.body);

    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    return next();
  },

  async UUID(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      id: Joi.string().uuid().required(),
    });
    const result = schema.validate(req.params);
    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    return next();
  },
  async UpdateMenuItem(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
      name: Joi.string().optional(),
      price: Joi.string().optional(),
      description: Joi.string().optional(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    return next();
  },
};

export { validate };
