import { Response, Request, NextFunction } from "express";
import { updateExpensesAction } from "../../actions/expenses/updateExpenseAction";

export const updateExpenses = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await updateExpensesAction(id, req.body);
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
