let cardapio = [
    {nome:"calamussa",preco:"R$30,00"},
    {nome:"frantupiry",preco:"R$35,00"}
]
function listarCardapio(){
    for (var i =0;i<cardapio.length;i++){
        
    }
    return cardapio;
}
function adicionarCardapio(nome,preco){
    let novaPizza={nome:nome,preco:preco};
    cardapio.push(novaPizza);
}

module.exports ={listarCardapio , adicionarCardapio};