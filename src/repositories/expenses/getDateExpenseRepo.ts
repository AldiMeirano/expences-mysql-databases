import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getDateExpensesRepo = async (start: string, end: string) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: {
        createdAt: {
          gte: new Date(start),
          lte: new Date(end),
        },
      },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
