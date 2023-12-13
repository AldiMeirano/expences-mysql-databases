
import express from 'express';
import { json } from 'stream/consumers';
import productRouter from './routers/productsRouters';
import expensesRouter from './routers/expensesRouter'
import { error, log } from 'console';
import {Request, Response} from 'express'
import db from './config/db'
import { connect } from 'http2';
import { Connection } from 'mysql2/typings/mysql/lib/Connection';
const app = express();
app.use(express.json())


db.getConnection((err, connection) => {
    if(err) { 
        return console.log(err);
        
    }
    console.log('Connection to db success');
    
})
app.get('/', (req, res) => {
    res.send('Api')
})

app.use('/products', productRouter)
app.use('/expenses',expensesRouter)

app.use((err: Error, req:Request , res:Response) => { 
        console.log(err.message);
        res.status
} )
app.listen(8000,() => { 
    console.log('App run in port 8000');
})