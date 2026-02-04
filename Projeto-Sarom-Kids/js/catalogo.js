function adicionarCarrinho(nome, preco) {
    const emailUsuario = localStorage.getItem("usuarioLogado");

    if (!emailUsuario) {
        alert("Você precisa estar logado para comprar!");
        window.location.href = "login.html";
        return;
    }

    const chaveCarrinho = `carrinho_${emailUsuario}`;
    let carrinho = JSON.parse(localStorage.getItem(chaveCarrinho)) || [];

    carrinho.push({ nome, preco });
    localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
}


function filtrarProdutos(tipo) {
    const produtos = document.querySelectorAll(".produto");

    produtos.forEach(produto => {
        if (tipo === "todos") {
            produto.style.display = "block";
        } else if (produto.classList.contains(tipo)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });
}

function irParaPromocoes() {
    window.location.href = "promocoes.html";
}

const catalogo = document.getElementById("catalogo");
const loading = document.getElementById("loading");

async function carregarProdutos() {
    try {
        const resposta = await fetch("../data/produtos.json");

        if (!resposta.ok) {
            throw new Error("Erro ao carregar produtos");
        }

        const produtos = await resposta.json();

        loading.style.display = "none";

        produtos.forEach(produto => {
            const div = document.createElement("div");
            div.classList.add("produto", produto.categoria);

            div.innerHTML = `
                <img src="${produto.imagem}">
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>
                <button onclick="adicionarCarrinho('${produto.nome}', ${produto.preco})">
                    Comprar
                </button>
            `;

            catalogo.appendChild(div);
        });

    } catch (erro) {
        loading.textContent = "Erro ao carregar os produtos";
        console.error(erro);
    }
}

carregarProdutos();