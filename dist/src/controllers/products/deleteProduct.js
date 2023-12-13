"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDataController = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname + '../../../db.json');
const deleteDataController = (req, res) => {
    const rawData = fs_1.default.readFileSync(filePath).toString();
    const parseData = JSON.parse(rawData);
    const nameOfId = parseInt(req.params.id);
    const data = parseData.products.findIndex(item => item.id === nameOfId);
    if (data < 0) {
        res.status(400).send({ massage: 'Id not found' });
    }
    else {
        parseData.products.splice(data, 1);
        fs_1.default.writeFileSync(filePath, JSON.stringify(parseData));
        res.status(200).send({ massage: 'Data successful delete' });
    }
};
exports.deleteDataController = deleteDataController;
