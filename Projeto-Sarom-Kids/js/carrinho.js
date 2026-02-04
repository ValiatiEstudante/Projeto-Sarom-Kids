const emailUsuario = localStorage.getItem("usuarioLogado");

if (!emailUsuario) {
    alert("Você precisa estar logado para acessar o carrinho!");
    window.location.href = "login.html";
}

const chaveCarrinho = `carrinho_${emailUsuario}`;
let carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

const lista = document.getElementById("lista-carrinho");
const totalElement = document.getElementById("total");

function atualizarCarrinho() {
    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco;

        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
            <button onclick="remover(${index})">Remover</button>
        `;

        lista.appendChild(div);
    });

    totalElement.textContent = "Total: R$ " + total.toFixed(2);
}

function remover(indice) {
    carrinho.splice(indice, 1);
    localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
    atualizarCarrinho();
}

document.getElementById("limpar").addEventListener("click", () => {
    localStorage.removeItem(chaveCarrinho);
    carrinho = [];
    atualizarCarrinho();
});

document.getElementById("finalizar").addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const emailUsuario = localStorage.getItem("usuarioLogado");
    const chaveCompras = `compras_${emailUsuario}`;

    let compras = JSON.parse(localStorage.getItem(chaveCompras)) || [];

    const novaCompra = {
        data: new Date().toLocaleDateString("pt-BR"),
        itens: carrinho
    };

    compras.push(novaCompra);
    localStorage.setItem(chaveCompras, JSON.stringify(compras));

    localStorage.removeItem(chaveCarrinho);
    carrinho = [];
    atualizarCarrinho();

    alert("Compra finalizada com sucesso!");
    window.location.href = "minhas-compras.html";
});

document.getElementById("ver-compras").addEventListener("click", () => {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        alert("Você precisa estar logado!");
        window.location.href = "login.html";
        return;
    }

    window.location.href = "minhas-compras.html";
});

atualizarCarrinho();
