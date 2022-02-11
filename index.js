//configuração inicial
const express = require('express');
const app = express(); //executa express como uma função

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
const port = 3000
const dbconnect = require("./dbconnect")

dbconnect()
.then( 
    () => {
        app.listen(port)
        console.log("Conectado ao banco de dados. Aplicação iniciada na porta " + port)
    })
.catch( (err) => { console.error(err) })


