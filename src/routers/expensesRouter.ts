import exp from 'constants'
import express from 'express'
import { expensesController } from '../controllers/expenses/getExpenses';
import { addExpensesController } from '../controllers/expenses/addProductExpenses';
import { deleteExpensesController } from '../controllers/expenses/deleteExpense';
import { updateExpenses } from '../controllers/expenses/updateExpenses';
import { getExpensesByIdController } from '../controllers/expenses/getExpensesById';



const router = express.Router();

router.get('/', expensesController);
router.post('/', addExpensesController);
router.get('/:id', getExpensesByIdController);
router.delete('/:id', deleteExpensesController);
router.patch('/:id', updateExpenses)
export default router