import { Response, Request, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { getExpensesAction } from "../../actions/expenses/getExpensesaAction";

export const expensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await getExpensesAction();
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
