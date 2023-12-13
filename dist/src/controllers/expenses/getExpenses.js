"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expensesController = void 0;
const db_1 = __importDefault(require("../../config/db"));
const expensesController = (req, res, next) => {
    const query = `select * from expenses`;
    db_1.default.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send({
            message: "success",
            data: "result"
        });
    });
};
exports.expensesController = expensesController;
