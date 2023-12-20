import { PrismaClient } from "@prisma/client";
import { IExpenses } from "../../controllers/type/type";
const prisma = new PrismaClient();

export const deleteExpensesRepo = async (id: number) => {
  try {
    const result = await prisma.expense.delete({
      where: { id },
    });
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
