let Cardapio =require('../models/Cardapio')
let cardapioController ={
    registrarCardapio: (req,res)=>{
        let {pizza} =req.params;
        let {preco} =req.params;
        res.send(`voce cadastrou a pizza de ${pizza} que tem o valor de ${preco} reais`);
        Cardapio.adicionarCardapio(pizza,preco);
    },    listarCardapio: (req,res)=>{
        let pizzas=Cardapio.listarCardapio();
        res.send(pizzas)
    }
}

module.exports = cardapioController;