// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()

import { getExpensesRepo } from "../../repositories/expenses/getExpensesRepo";

export const getExpensesAction = async () => {
  try {
    // const expenses = await prisma.expense.findMany()
    const expense = await getExpensesRepo();
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
