import {Response,Request, NextFunction } from "express";


import db from "../../config/db";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";



export const addExpensesController = (req:Request, res: Response, next:NextFunction) => {     
                // const id = req.body.id
                
               req.body.date= new Date().toISOString().slice(0, 19).replace('T', ' ')
        const {name, nominal, category, date } = req.body;
db.query(`insert into expense(name,nominal,category,date) values('${name}','${nominal}', '${category}', '${date}')`, (err, result) => {
        if(err){ 
                return res.status(500).send(err)
        }
        res.status(200).send({ 
                message: "success",
                data: result
        })
       
 });
}



        
