
import { Request, Response } from "express";
import fs from 'fs';
import path, { parse } from "path";
import { Data } from "../type/type";

const filePath = path.join(__dirname + '../../../db.json');



export const getProductById= (req:Request, res: Response) => { 
    const rawData = fs.readFileSync(filePath).toString();
    const parseData :Data  = JSON.parse(rawData);
    const nameOfId =parseInt(req.params.id) 

  const data =  parseData.products.find(item => item.id === nameOfId)

  if(!data){ 
    res.status(400).send({massage :'Product not found'})
  }else{ 
    res.send({ 
      massage : 'Data is exist',
      Data : data
    })
  }




}
 