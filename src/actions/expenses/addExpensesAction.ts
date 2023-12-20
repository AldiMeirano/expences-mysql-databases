// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()

import { IExpenses } from "../../controllers/type/type";
import { addExpensesRepo } from "../../repositories/expenses/addExpensesRepo";

export const addExpensesAction = async (body: IExpenses) => {
  try {
    // const expenses = await prisma.expense.findMany()
    const expense = await addExpensesRepo(body);
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
