"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProductsController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname + '../../../db.json');
const addProductsController = (req, res) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    req.body.id = parseData.products[parseData.products.length - 1].id + 1;
    parseData.products.push(req.body);
    fs_1.default.writeFileSync(filePath, JSON.stringify(parseData));
    res.send({
        message: "success",
        data: parseData.products
    });
};
exports.addProductsController = addProductsController;
