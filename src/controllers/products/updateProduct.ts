
import { Request, Response } from "express";
import fs from 'fs';
import path, { parse } from "path";
import { Data } from "../type/type";
import { log } from "console";

const filePath = path.join(__dirname + '../../../db.json');



export const updateDataController= (req:Request, res: Response) => { 
    const rawData = fs.readFileSync(filePath).toString();
    const parseData :Data  = JSON.parse(rawData);
    const nameOfId =parseInt(req.params.id) 


  const data =  parseData.products.findIndex(item => item.id === nameOfId)
  
  console.log('Sebelum', parseData.products[data]);
  
parseData.products[data] = { 
    ...parseData.products[data],
    ...req.body
}
console.log('Sesudah',parseData.products[data]);

fs.writeFileSync(filePath, JSON.stringify(parseData))
res.send({ 
    massage: 'Success update data'
})



}
 