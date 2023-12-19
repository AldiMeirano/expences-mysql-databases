import {Response,Request, NextFunction } from "express";
import db from "../../../config/db";
import { QueryError } from "mysql2";
import { IExpenses } from "../../type/type";



export const getExpensesByQuery = (req:Request, res: Response, next:NextFunction) => { 
        const {category} = req.query
        const query = `select * from expense where category= '${category}'`;
        

     
      

      if(!category) { 
        return res.status(400).send('Please required query')
      }
        db.query(query, (err:QueryError, result:IExpenses[]) => { 
                if(err){ 
                 return res.status(500).send(err)
                } 

                        const valueNominal = result.reduce((a,b) => a + b.nominal, 0)
                        
                        
                        res.status(200).send({ 
                                message: "success",
                                totalExpences: valueNominal,
                                data: result
                        })
           
     console.log(result);
     
      
})
}