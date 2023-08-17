import express, { Request, Response } from 'express';

const PORT = process.env.PORT || 8090;

const app = express();

app.get('/', (reg: Request, res: Response)=>{
    res.json({
        msg: 'ok'
    })
})

app.listen(PORT, () => console.log('Servidor iniciado na porta' + PORT));
