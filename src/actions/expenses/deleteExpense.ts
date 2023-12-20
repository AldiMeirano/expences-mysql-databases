import { deleteExpensesRepo } from "../../repositories/expenses/deleteExpenses";
import { getExpensesAction } from "./getExpensesaAction";

export const deleteExpensesAction = async (id: number) => {
  try {
    // const expenses = await prisma.expense.findMany()
    const expense = await deleteExpensesRepo(id);
    const data = await getExpensesAction();
    return {
      status: 200,
      message: "success",
      deleteData: expense,
      data: data,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
