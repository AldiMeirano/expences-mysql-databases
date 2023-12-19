import {Response,Request, NextFunction } from "express";
import db from "../../../config/db";
import { QueryError } from "mysql2";
import { IExpenses } from "../../type/type";



export const getExpensesByDate = (req:Request, res: Response, next:NextFunction) => { 
        const {start, end} = req.query
        const startDate = new Date(start as string)
        const endDate = new Date(end as string)
        const formatStartDate = startDate.toISOString().slice(0, 19).replace('T', ' ')
        const formatEndDate = endDate.toISOString().slice(0, 19).replace('T', ' ')
        const query = `select * from expense where date between '${formatStartDate}' and '${formatEndDate}'`;
        

     
      

      if(!start && !end) { 
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