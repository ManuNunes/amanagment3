require('dotenv').config()
import app from './app/app';

app.listen(3333, () => { console.log("O Servidor está rodando na porta 3333") })