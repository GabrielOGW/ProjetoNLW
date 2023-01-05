import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../repository/UsersRepositories";

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;

  const admin = await UsersRepositories.findOne({ where: { id: user_id } });

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "Unauthorized",
  });
}
