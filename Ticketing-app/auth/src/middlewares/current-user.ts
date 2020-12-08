import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

interface UserPayload {
  email: string;
  id: string;
}

// Add the UserPayload as part of Request

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.session?.jwt) {
    return next();
  }
  try {
    const payload = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = payload;

    console.log(`Setting req.currentUser = ${JSON.stringify(req.currentUser)}`);

    next();
  } catch (error) {
    next();
  }
};
