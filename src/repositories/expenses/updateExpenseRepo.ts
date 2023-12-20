import { PrismaClient } from "@prisma/client";
import { IExpenses } from "../../controllers/type/type";
const prisma = new PrismaClient();

export const updateExpensesRepo = async (id: number, body: IExpenses) => {
  const { name, nominal, category, userId } = body;
  try {
    const expenses = await prisma.expense.update({
      where: { id },
      data: { name, nominal, category, userId },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
