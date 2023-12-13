import {Request, Response} from 'express'
import fs from 'fs';
import path from "path";
import { Data } from "../type/type";
const filePath = path.join(__dirname + '../../../db.json');

export const addProductsController = (req:Request, res:Response) => { 
    const rawData = fs.readFileSync(filePath).toString();
    const parseData :Data = JSON.parse(rawData);
 req.body.id  = parseData.products[parseData.products.length - 1].id + 1

parseData.products.push(req.body);

fs.writeFileSync(filePath, JSON.stringify(parseData))

    res.send({ 
        message: "success",
        data: parseData.products
    })
};