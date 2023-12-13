import {Response,Request, NextFunction } from "express";
import fs from 'fs';
import path, { parse } from "path";
import { Data } from "../type/type";
import db from "../../config/db";
// import { Data } from "./type";


export const updateExpenses= (req:Request, res: Response, next:NextFunction) => { 
      
    const query = `update expense set name=?,nominal=?,category=?, date=? where id = ${req.params.id}`;
    const name = req.body.name
    const nominal = req.body.nominal
    const category = req.body.category
   const date = req.body.date= new Date()
    db.query(query,[name,nominal,category,date] ,(err, result) => { 
            if(err){ 
                    return res.status(500).send(err)
            }else { 
                    res.status(200).send({ 
                            message: "success",
                            data: result
                    })
            }

           
  
           
            
  
})
            
            
}   