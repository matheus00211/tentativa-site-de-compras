// Array para armazenar os produtos inseridos
let produtos = []; // 0 cochetes define a Array
let total = 0; // Valor inicial

// Elementos do DOM
const produtoInput = document.getElementById("produto");
const valorInput = document.getElementById("valor");
const tabela = document.getElementById("tabelaProdutos");
const tbody = tabela.querySelector("tbody");
const totalElement = document.getElementById("total");

// Função para adicionar um produto ao array e atualizar a tabela
document.getElementById("adicionar").addEventListener("click", function() {
    const nomeProduto = produtoInput.value.trim();
    const valorProduto = parseFloat(valorInput.value);

    if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0) {
        // Adiciona o produto ao array 
        produtos.push({ nome: nomeProduto, valor: valorProduto });

        // Adiciona o valor total
        total += valorProduto;

        // Limpa os campos de entrada
        produtoInput.value = '';
        valorInput.value = '';

        // Atualiza a tabela e exibe o total
        atualizarTabela();
    } else {
        alert("Por favor, insira um nome de produto válido e um valor numérico positivo.");
    }
});

// Função para remover um produto do array e atualizar a tabela
document.getElementById("remover").addEventListener("click", function() {
    const index = parseInt(prompt("Digite o índice do produto a remover (0-" + (produtos.length - 1) + "):"));

    if (!isNaN(index) && index >= 0 && index < produtos.length) {
        const produtoRemovido = produtos[index];

        // Remove o produto do array
        produtos.splice(index, 1);

        // Remove o valor total
        total -= produtoRemovido.valor;

        // Atualiza a tabela
        atualizarTabela();
    } else {
        alert("Índice inválido.");
    }
});

// Função para atualizar a tabela com os produtos
function atualizarTabela() {
    // Limpa a tabela
    tbody.innerHTML = '';

    // Adiciona cada produto na tabela
    produtos.forEach(function(produto) {
        let linha = document.createElement("tr");
        let nomeCell = document.createElement("td");
        let valorCell = document.createElement("td");

        nomeCell.textContent = produto.nome;
        valorCell.textContent = "R$ " + produto.valor.toFixed(2); // Formata o valor

        linha.appendChild(nomeCell);
        linha.appendChild(valorCell);
        tbody.appendChild(linha);
    });

    // Exibe o total formatado
    totalElement.textContent = "Total: R$ " + total.toFixed(2);

    // Exibe a tabela
    tabela.classList.remove("oculto");
}

// Função para visualizar a tabela (opcional, já está incorporada na função de atualização)
document.getElementById("visualizarTabela").addEventListener("click", atualizarTabela);

