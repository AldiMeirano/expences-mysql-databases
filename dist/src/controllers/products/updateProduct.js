"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDataController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname + '../../../db.json');
const updateDataController = (req, res) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    const nameOfId = parseInt(req.params.id);
    const data = parseData.products.findIndex(item => item.id === nameOfId);
    console.log('Sebelum', parseData.products[data]);
    parseData.products[data] = Object.assign(Object.assign({}, parseData.products[data]), req.body);
    console.log('Sesudah', parseData.products[data]);
    fs_1.default.writeFileSync(filePath, JSON.stringify(parseData));
    res.send({
        massage: 'Success update data'
    });
};
exports.updateDataController = updateDataController;
