import {Response,Request, NextFunction } from "express";

import db from "../../config/db";


export const deleteExpensesController = (req:Request, res: Response, next:NextFunction) => { 
        
    const query = `delete from expense where  id = ${req.params.id}`
  
    
        db.query(query, (err, result) => { 
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