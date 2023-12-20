import { Response, Request, NextFunction } from "express";
import { addExpensesAction } from "../../actions/expenses/addExpensesAction";

export const addExpensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await addExpensesAction(req.body);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
