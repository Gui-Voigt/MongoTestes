//configuração inicial
const express = require('express');
const app = express(); //executa express como uma função
const mongoose = require('mongoose');

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req
    res.json({ message: "Rota acessada com sucesso"})

})

//entregar uma porta
const logins = require("./logins");
const DBUSER = logins.DBUSER;
const DBPASS = logins.DBPASS;
    
const uri = `mongodb+srv://${DBUSER}:${DBPASS}@cluster0.g3y4t.mongodb.net/APIDB?retryWrites=true&w=majority`
const port = 3000
mongoose.connect(uri)
.then( 
    () => {
        app.listen(port)
        console.log("Conectado ao banco de dados. Aplicação iniciada na porta " + port)
    })
.catch( (err) => { console.error(err) })


