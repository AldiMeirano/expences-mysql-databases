"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getExpenses_1 = require("../controllers/expenses/getExpenses");
const addProductExpenses_1 = require("../controllers/expenses/addProductExpenses");
const deleteExpense_1 = require("../controllers/expenses/deleteExpense");
const updateExpenses_1 = require("../controllers/expenses/updateExpenses");
const getExpensesById_1 = require("../controllers/expenses/getExpensesById");
const router = express_1.default.Router();
router.get('/', getExpenses_1.expensesController);
router.post('/', addProductExpenses_1.addExpensesController);
router.get('/:id', getExpensesById_1.getExpensesByIdController);
router.delete('/:id', deleteExpense_1.deleteExpensesController);
router.patch('/:id', updateExpenses_1.updateExpenses);
exports.default = router;
