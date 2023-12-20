import { getExpensesByIdRepo } from "../../repositories/expenses/getExpensesById";

export const getExpensesByIdAction = async (id: number) => {
  try {
    const expenses = await getExpensesByIdRepo(id);

    return {
      status: 200,
      emssage: "succes",
      data: expenses,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
