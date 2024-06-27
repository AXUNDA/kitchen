import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const validateRequest = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
      });
    }
    return next();
  };
};

const validateParams = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.params);

    if (error) {
      return res.status(400).json({
        error: error.details[0].message,
      });
    }
    return next();
  };
};

const schemas = {
  signup: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(20),
    address: Joi.string().required(),
    phone: Joi.string().required(),
    isVendor: Joi.boolean().optional(),
  }),
  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  createMenuItem: Joi.object({
    name: Joi.string().required(),
    price: Joi.string().required(),
    description: Joi.string().required(),
  }),
  uuid: Joi.object({
    id: Joi.string().uuid().required(),
  }),
  updateMenuItem: Joi.object({
    name: Joi.string().optional(),
    price: Joi.number().optional(),
    description: Joi.string().optional(),
  }),
};

// Validate object with methods
const validate = {
  Signup: validateRequest(schemas.signup),
  Login: validateRequest(schemas.login),
  CreateMenuItem: validateRequest(schemas.createMenuItem),
  UUID: validateParams(schemas.uuid),
  UpdateMenuItem: validateRequest(schemas.updateMenuItem),
};

export { validate };
