import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

interface ValidationSchemas {
  body?: ZodSchema;
  query?: ZodSchema;
}

export const validateRequest = (schemas: ValidationSchemas) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      if (schemas.body) {
        const parsedBody = schemas.body.parse(req.body);
        req.body = parsedBody;
      }
      if (schemas.query) {
        const parsedQuery = schemas.query.parse(req.query);
        req.query = parsedQuery;
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ errors: error.formErrors.fieldErrors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
};
