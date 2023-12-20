import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getExpensesRepo = async () => {
  try {
    const expenses = await prisma.expense.findMany({
      include: {
        User: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
