function carregaProdutos(produtos) {
    let listaP = document.querySelector("#produtos");

    for (let item of produtos) {
        var filhoLi = document.createElement('li');
        filhoLi.setAttribute('data-produto', item.descicao);
        filhoLi.setAttribute('data-preco', item.preco);
        filhoLi.textContent = item.descicao;
        listaP.appendChild(filhoLi);
    }
}

window.onload = function () {

    //Frutas    
    let produtos = [
        { descicao: "Laranja", preco: 2.50 },
        { descicao: "Abacaxi", preco: 4.90 },
        { descicao: "Manga", preco: 3.60 },
        { descicao: "Goiaba", preco: 3.80 },
        { descicao: "Pêssego", preco: 4.50 }
    ]

    //Produtos e preço
    carregaProdutos(produtos);

    var listaC = document.querySelector("#cestaDoCliente");
    var elementTotal = document.querySelector("#mostraTotalCompra");

    // CLICAR NOS PRODUTOS E DESCER PARA A CESTA DO CLIENTE
    let nodesP = document.querySelectorAll("#produtos>li");
    nodesP = Array.from(nodesP);

    nodesP.forEach(function (itemProduto) {
        itemProduto.addEventListener('click', function () {
            let dataProduto = this.getAttribute("data-produto");
            let dataPreco = this.getAttribute("data-preco");

            var nodesItensCesta = document.querySelectorAll("#cestaDoCliente>li");
            var arrayItensCesta = Array.from(nodesItensCesta);

            var itensAdicionados = arrayItensCesta
                .filter(itemCesta => itemCesta.getAttribute("data-produto") == dataProduto);

            if (itensAdicionados.length > 0) {
                alert(`A fruta ${dataProduto} JÁ ESTÁ NO CARRINHO!`);
                return;
            }

            let itemListaCliente = document.createElement('li');
            itemListaCliente.setAttribute('data-produto', dataProduto);
            itemListaCliente.setAttribute('data-preco', dataPreco);
            itemListaCliente.textContent = this.textContent;
            listaC.appendChild(itemListaCliente);

            //Totalização dos produtos
            nodesItensCesta = document.querySelectorAll("#cestaDoCliente>li");
            arrayItensCesta = Array.from(nodesItensCesta);

            var totalProd = 0;
            arrayItensCesta.forEach(item => {
                let dataPreco = this.getAttribute("data-preco");
                totalProd += Number(dataPreco);
            });
            
            var formatedNumber = new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'})
                                         .format(totalProd);
            elementTotal.value = formatedNumber;
        });
    })
}
