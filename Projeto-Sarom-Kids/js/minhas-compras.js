const emailUsuario = localStorage.getItem("usuarioLogado");

if (!emailUsuario) {
    alert("Você precisa estar logado!");
    window.location.href = "login.html";
}

const chaveCompras = `compras_${emailUsuario}`;
const compras = JSON.parse(localStorage.getItem(chaveCompras)) || [];

const lista = document.getElementById("lista-compras");

if (compras.length === 0) {
    lista.innerHTML = "<p style='text-align:center;'>Você ainda não fez nenhuma compra.</p>";
}

compras.forEach((compra, index) => {
    let total = 0;

    const div = document.createElement("div");
    div.classList.add("compra");

    let itensHTML = "";

    compra.itens.forEach(item => {
        total += item.preco;
        itensHTML += `<li>${item.nome} - R$ ${item.preco.toFixed(2)}</li>`;
    });

    div.innerHTML = `
        <h3>Compra ${index + 1} - ${compra.data}</h3>
        <ul>${itensHTML}</ul>
        <strong>Total: R$ ${total.toFixed(2)}</strong>
        <hr>
    `;

    lista.appendChild(div);
});
