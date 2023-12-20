import { PrismaClient } from "@prisma/client";
import { IExpenses } from "../../controllers/type/type";
const prisma = new PrismaClient();

export const addExpensesRepo = async (body: IExpenses) => {
  const { name, nominal, category, userId } = body;
  try {
    const result = await prisma.expense.create({
      data: { name, nominal, category, userId },
    });

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
