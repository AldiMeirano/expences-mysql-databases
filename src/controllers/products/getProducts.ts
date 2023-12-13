import { Request, Response } from "express"

import fs from 'fs';
import path from "path";
import { Data } from "../type/type";
const filePath = path.join(__dirname + '../../../db.json');

// console.log(filePath);


export  const getProductController = (req : Request, res: Response) => { 
   
    const rawData = fs.readFileSync(filePath).toString();
    const parseData :Data = JSON.parse(rawData)
    console.log(parseData.products);

    res.send({ 
        message: "success",
        data: parseData.products
    })
};