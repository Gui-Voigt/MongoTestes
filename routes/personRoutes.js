const router = require('express').Router()
const Person = require('../models/Person')

//rotas da API
router.post('/', async (req,res) => {

    // req.body
    const {name, salary, approved} = req.body //destructure do req.body em 3 variáveis

    if(!name) {
        res.status(422).json({error: "O nome é obrigatório"})
    }

    const person = {
        name,
        salary,
        approved
    } //cria um objeto com os paramêtros descontruidos

    try{
        //criando dados
        await Person.create(person)

        res.status(201).json({message : "Cadastro realizado com sucesso"})

    }catch (error){
        res.status(500).json({error : error}) //erro do servidor
    }
});

module.exports = router;