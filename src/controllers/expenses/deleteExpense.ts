import { Response, Request, NextFunction } from "express";

import db from "../../config/db";
import { QueryError } from "mysql2";
import { IExpenses } from "../type/type";
import { resolve } from "path";
import { rejects } from "assert";
import { deleteExpensesAction } from "../../actions/expenses/deleteExpense";
import { getExpensesAction } from "../../actions/expenses/getExpensesaAction";

export const deleteExpensesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await deleteExpensesAction(id);

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
