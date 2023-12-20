import { Response, Request, NextFunction } from "express";
import { getExpensesByIdAction } from "../../actions/expenses/geExpensesByIdAction";

export const getExpensesByIdController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await getExpensesByIdAction(id);

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
