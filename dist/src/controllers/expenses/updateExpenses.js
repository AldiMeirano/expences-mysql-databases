"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExpenses = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import { Data } from "./type";
const filePath = path_1.default.join(__dirname + '../../../db.json');
const updateExpenses = (req, res, next) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    const index = parseData.expenses.findIndex(i => i.id === Number(req.params.id));
    if (index === -1) {
        res.status(400).send({ message: "404 Data not found" });
    }
    console.log('Before', parseData.expenses[index]);
    parseData.expenses[index] = Object.assign(Object.assign({}, parseData.expenses[index]), req.body);
    console.log('After', parseData.expenses[index]);
    fs_1.default.writeFileSync(filePath, JSON.stringify(parseData));
    res.send({
        massage: 'Success update data'
    });
};
exports.updateExpenses = updateExpenses;
