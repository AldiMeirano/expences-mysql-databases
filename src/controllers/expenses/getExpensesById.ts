import {Response,Request, NextFunction } from "express";
import { QueryError } from "mysql2";
import { IExpenses } from "../type/type";
import db from "../../config/db";



export const getExpensesByIdController = (req:Request, res: Response, next:NextFunction) => { 
    const query = `select * from expense where id = ${req.params.id}`;
    db.query(query, (err:QueryError, result:IExpenses[]) => { 
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