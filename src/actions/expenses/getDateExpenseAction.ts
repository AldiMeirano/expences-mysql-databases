import { deleteExpensesRepo } from "../../repositories/expenses/deleteExpenses";
import { getDateExpensesRepo } from "../../repositories/expenses/getDateExpenseRepo";
import { getExpensesAction } from "./getExpensesaAction";

export const getDateExpensesAction = async (start:string, end : string) => {
  try {
    // const expenses = await prisma.expense.findMany()
    const expense = await getDateExpensesRepo(start, end);
 
    return {
      status: 200,
      message: "success",
      deleteData: expense,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
