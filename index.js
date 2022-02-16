//configuração inicial
const express = require('express');
const app = express(); //executa express como uma função

const personRoutes = require('./routes/personRoutes')
const dbconnect = require("./dbconnect")

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())


//rotas da API
app.use('/person', personRoutes) //tudo o que vier de /person será redirecionado para personRoutes

//rota inicial / endpoint
app.get('/', (req, res) => {

    //mostrar req
    res.json({ message: "Rota acessada com sucesso"})

})

//entregar uma porta
const port = 3000

dbconnect()
.then( 
    () => {
        app.listen(port)
        console.log("Conectado ao banco de dados. Aplicação iniciada na porta " + port)
    })
.catch( (err) => { console.error(err) });


