"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname + '../../../db.json');
const getProductById = (req, res) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    const nameOfId = parseInt(req.params.id);
    const data = parseData.products.find(item => item.id === nameOfId);
    if (!data) {
        res.status(400).send({ massage: 'Product not found' });
    }
    else {
        res.send({
            massage: 'Data is exist',
            Data: data
        });
    }
};
exports.getProductById = getProductById;
