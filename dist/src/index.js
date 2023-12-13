"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsRouters_1 = __importDefault(require("./routers/productsRouters"));
const expensesRouter_1 = __importDefault(require("./routers/expensesRouter"));
const db_1 = __importDefault(require("./config/db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
db_1.default.getConnection((err, connection) => {
    if (err) {
        return console.log(err);
    }
});
app.get('/', (req, res) => {
    res.send('Api');
});
app.use('/products', productsRouters_1.default);
app.use('/expenses', expensesRouter_1.default);
app.use((err, req, res) => {
    console.log(err.message);
    res.status;
});
app.listen(8000, () => {
    console.log('App run in port 8000');
});
