import {Response,Request, NextFunction } from "express";

import db from "../../config/db";
import { QueryError } from "mysql2";
import { IExpenses } from "../type/type";
import { resolve } from "path";
import { rejects } from "assert";


export const deleteExpensesController = async (req:Request, res: Response, next:NextFunction) => { 
        
    




const deleteData = await new Promise((resolve, rejects) => { 
 db.query(`delete from expense where  id = ${req.params.id}`, (err, result) => { 
            if(err){ 
                    return rejects(err)
            }
        resolve(result);
        })
})

const getDataAll = await new Promise((resolve, rejects) => { 
        db.query(`select * from expense`, (err, result) => { 
                if(err) { 
                    return rejects(err)
                }
                resolve(result)
        })
 
})

        res.send({ 
            message:'Delete data success',
            deleteData,
            remainingData: getDataAll
        })
}   

