import {Response,Request, NextFunction } from "express";
import fs from 'fs';
import path, { parse } from "path";
import { Data, IExpenses } from "../type/type";
import db from "../../config/db";
import { QueryError } from "mysql2";
// import { Data } from "./type";


export const updateExpenses= (req:Request, res: Response, next:NextFunction) => { 
     const {id} =  req.params
    let query = `update expense set `;
    const updateField = req.body;


Object.keys(updateField).forEach((key , index) => { 
        query += `${key} = ${updateField[key]},`
        if(index !== Object.keys(updateField).length - 1){ 
                query += ", "
        }


})


query += ` where id='"${id}"'`



    db.query(query,(err:QueryError, result:IExpenses) => { 
            if(err){ 
                    return res.status(500).send(err)
            }else { 
                    res.status(200).send({ 
                            message: "success update data",
                            data: result
                    })
            }

           
  
        })     
            
            
}   
  