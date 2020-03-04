const express = require('express');
const app = express();

let rotasCardapio =require('./routes/cardapioRoutes');

app.get('/' , (req,res)=>{
    res.send("Pizzaria da DH");
})
app.get('/cardapio' , (req,res)=>{
    res.send("cardapio da pizzaria DH");
})
app.use('/cardapio',rotasCardapio);


app.listen(3000 ,()=>console.log("server on"));