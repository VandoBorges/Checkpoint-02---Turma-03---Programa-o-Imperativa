/* Crie uma variável produtos, que contenha um array de objetos, com no mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do Produto e Status.
A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está disponível em estoque. */

var produtos = [
        {nomeDoProduto: 'Arroz', valorDoProduto: 25.00, qualidadeDoProduto: 5, status: false},

        {nomeDoProduto:'Feijão', valorDoProduto: 13.99, qualidadeDoProduto: 8, status: false},

        {nomeDoProduto:'Açúcar', valorDoProduto: 18.00, qualidadeDoProduto: 9, status: false},

        {nomeDoProduto:'Geladeira', valorDoProduto: 2400.00, qualidadeDoProduto:10, status: true},

        {nomeDoProduto:'Fogão', valorDoProduto: 1600.00, qualidadeDoProduto: 9, status: true},
        
        {nomeDoProduto:'Ar Condicionado', valorDoProduto: 3000.00, qualidadeDoProduto: 7, status: true}
];

/* Em seguida, um usuário deseja filtrar os produtos, com base em alguns critérios. Selecione todos os produtos que tenham: 
Valor entre 482 e 1600; Qualidade superior a 60; Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho. */

var carrinho = produtos.filter(function(produtos) {
     if(produtos.valorDoProduto  >= 482 && produtos.valorDoProduto <= 1600
        && produtos.qualidadeDoProduto > 60 
        &&produtos.status == true){
         return produtos;
        }    
})

/* Por fim, é necessário exibir todos os itens presentes no carrinho, com seus nomes e preços correspondentes*/
console.log(carrinho)

/* e no final um valor total, resultante da somatória de todos os produtos. */
var valorTotal = carrinho.reduce(function(resultado, valor) {
        return resultado + valor.valorDoProduto;
},0);

console.log(`O valor total do seu carrinho de compras é de R$ ${valorTotal}`)


