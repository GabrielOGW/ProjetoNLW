import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "e5176b450ef2fc8c611b5f9924de65ce"
    ) as IPayload;

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).end();
  }
}
