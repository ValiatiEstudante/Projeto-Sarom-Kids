const form = document.getElementById("cadastroForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioExiste = usuarios.some(user => user.email === email);
    if (usuarioExiste) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    const novoUsuario = {
        nome,
        email,
        senha
    };

    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

    alert("Cadastro realizado com sucesso!");

    window.location.href = "index.html";
});
