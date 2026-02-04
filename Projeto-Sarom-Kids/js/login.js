const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (email === "" || senha === "") {
        mensagem.textContent = "Preencha todos os campos!";
        mensagem.style.color = "red";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuario = usuarios.find(
        user => user.email === email && user.senha === senha
    );

    if (!usuario) {
        mensagem.textContent = "E-mail ou senha inválidos!";
        mensagem.style.color = "red";
        return;
    }

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "green";

    setTimeout(() => {
        window.location.href = "index.html";
    }, 1200);
});
