"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpensesByIdController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// import { Data } from "./type";
const filePath = path_1.default.join(__dirname + '../../../db.json');
const getExpensesByIdController = (req, res, next) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    const index = parseData.expenses.find(i => i.id === Number(req.params.id));
    if (!index) {
        res.status(400).send({ message: "404 Data not found" });
    }
    else {
        res.send({
            message: 'Data found',
            data: index
        });
    }
};
exports.getExpensesByIdController = getExpensesByIdController;
