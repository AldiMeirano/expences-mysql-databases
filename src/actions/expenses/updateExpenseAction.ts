// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()

import { IExpenses } from "../../controllers/type/type";
import { updateExpensesRepo } from "../../repositories/expenses/updateExpenseRepo";

export const updateExpensesAction = async (id: number, body: IExpenses) => {
  try {
    // const expenses = await prisma.expense.findMany()
    const expense = await updateExpensesRepo(id, body);
    return {
      status: 200,
      message: "success",
      data: expense,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
