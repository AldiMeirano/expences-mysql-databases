
import { Request, Response } from "express";
import fs from 'fs';
import path, { parse } from "path";
import { Data } from "../type/type";
import { log } from "console";

const filePath = path.join(__dirname + '../../../db.json');



export const deleteDataController= (req:Request, res: Response) => { 
    const rawData = fs.readFileSync(filePath).toString();
    const parseData :Data  = JSON.parse(rawData);
    const nameOfId =parseInt(req.params.id) 


  const data =  parseData.products.findIndex(item => item.id === nameOfId)

if(data < 0) { 
  res.status(400).send({massage :'Id not found'})
}else { 
  parseData.products.splice(data, 1)
  fs.writeFileSync(filePath, JSON.stringify(parseData))
  res.status(200).send({  massage : 'Data successful delete'})
}
 



}
 