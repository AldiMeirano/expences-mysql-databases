import {Response,Request, NextFunction } from "express";


import db from "../../config/db";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";



export const addExpensesController = (req:Request, res: Response, next:NextFunction) => { 
        
          
     


                const id = req.body.id
                const name = req.body.name
                const nominal = req.body.nominal
                const category = req.body.category
               const date = req.body.date= new Date()
      
db.query(`insert into expenses_databases.expense values(?,?,?,?,?)`,[id, name, nominal,category,date], (err, result) => {
        if(err){ 
                return res.status(500).send(err)
        }
        res.status(200).send({ 
                message: "success",
                data: result
        })
       
 });
}



        
