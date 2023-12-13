"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname + '../../../db.json');
// console.log(filePath);
const getProductController = (req, res) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    console.log(parseData.products);
    res.send({
        message: "success",
        data: parseData.products
    });
};
exports.getProductController = getProductController;
