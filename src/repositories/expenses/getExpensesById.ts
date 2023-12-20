import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByIdRepo = async (id: number) => {
  try {
    // -- join / includes
    const expenses = await prisma.expense.findUnique({
      where: {
        id,
      },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
