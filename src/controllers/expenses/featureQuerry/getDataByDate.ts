import { Response, Request, NextFunction } from "express";
import { getDateExpensesAction } from "../../../actions/expenses/getDateExpenseAction";

export const getExpensesByDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { start, end } = req.query;
  try {
    const result = await getDateExpensesAction(start as string, end as string);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
