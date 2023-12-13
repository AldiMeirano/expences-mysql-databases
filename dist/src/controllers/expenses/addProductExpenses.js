"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExpensesController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname + '../../../db.json');
const addExpensesController = (req, res, next) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    // parseData.expenses
    const newDate = new Date();
    req.body.date = newDate;
    if (parseData.expenses.length) {
        req.body.id = parseData.expenses[parseData.expenses.length - 1].id + 1;
    }
    else {
        req.body.id = 1;
    }
    parseData.expenses.push(req.body);
    fs_1.default.writeFileSync(filePath, JSON.stringify(parseData));
    console.log(req.body);
    res.send({
        massage: 'Success add data',
        data: parseData.expenses
    });
};
exports.addExpensesController = addExpensesController;
