document.addEventListener("DOMContentLoaded", () => {
    const areaAcoes = document.querySelector(".acoes");
    const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (!areaAcoes) return;

    if (usuarioLogado) {
        areaAcoes.innerHTML = `
            <a href="carrinho.html" class="btn-carrinho">Carrinho</a>
            <span class="usuario-nome">Olá, ${usuarioLogado.nome}</span>
            <button class="btn-sair">Sair</button>
        `;

        document.querySelector(".btn-sair").addEventListener("click", () => {
            localStorage.removeItem("usuarioLogado");
            window.location.reload();
        });
    }
});

const lista = document.getElementById("lista-promocoes");
const loading = document.getElementById("loading");
const erro = document.getElementById("erro");

async function carregarPromocoes() {
    try {
        loading.style.display = "block";

        const resposta = await fetch("../data/produtos.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar produtos");
        }

        const produtos = await resposta.json();

        renderizarPromocoes(produtos);

    } catch (e) {
        erro.textContent = "Não foi possível carregar as promoções.";
        console.error(e);
    } finally {
        loading.style.display = "none";
    }
}

const renderizarPromocoes = (produtos) => {
    lista.innerHTML = "";

    produtos
        .filter(produto => produto.precoPromocao)
        .forEach(produto => {
            lista.innerHTML += `
                <div class="produto">
                    <img src="${produto.imagem}">
                    <h3>${produto.nome}</h3>
                    <p class="preco-antigo">R$ ${produto.preco.toFixed(2)}</p>
                    <p class="preco-novo">R$ ${produto.precoPromocao.toFixed(2)}</p>
                    <button onclick="adicionarCarrinho('${produto.nome}', ${produto.precoPromocao})">
                        Comprar
                    </button>
                </div>
            `;
        });
};

carregarPromocoes();