const carrinho = JSON.parse(localStorage.getItem('carrinho')) || {}; //Transforma os valores em Json e armazena no localStorage

// //Função para adicionar no carrinho o produto e preço
// function adicionarProduto(nome, preco) {   
//     if (carrinho[nome]) {
//         carrinho[nome].quantidade += 1;
//     } else {
//         carrinho[nome] = { preco: preco, quantidade: 1 };
//     }
//     atualizarCarrinho();
//     salvarCarrinho();
// }

// //Atualiza o carrinho a cada novo produto adicionado
// function atualizarCarrinho() {
//     const listaCarrinho = document.getElementById('lista-carrinho');
//     listaCarrinho.innerHTML = '';
//     let total = 0;

//     for (const produto in carrinho) {
//         const item = carrinho[produto];
//         const li = document.createElement('li'); //createElement cria elementos como se fosse uma lista separados por <br>
//         li.textContent = `${produto} - R$${item.preco.toFixed(2)} x ${item.quantidade}`;
//         listaCarrinho.appendChild(li);
//         total += item.preco * item.quantidade;
//     }

//     document.getElementById('total').textContent = `Total: R$${total.toFixed(2)}`;
// }
// function finalizarCompra() {
//     let total = 0; // Inicializa o total como 0

//     // Loop através dos itens do carrinho para calcular o total
//     for (const produto in carrinho) {
//         const item = carrinho[produto];
//         total += item.preco * item.quantidade; // Adiciona o valor do item ao total
//     }

//     // Exibe o total em um alerta usando concatenação
//     alert("Valor total da compra: R$" + total.toFixed(2)); // Concatena a string com o total
//     localStorage.removeItem('carrinho'); // Limpa o carrinho após a compra
// }
