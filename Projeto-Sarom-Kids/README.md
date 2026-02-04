# 🛍️ Sarom Kids – Mini E-commerce Infantil

Projeto desenvolvido como trabalho acadêmico utilizando **HTML5, CSS3 e JavaScript puro**, simulando um mini e-commerce infantil.  
A aplicação funciona totalmente **client-side**, com persistência de dados via **Web Storage** e carregamento de produtos por **requisição assíncrona (Fetch API)**.

---

## Objetivo do Projeto

Desenvolver uma aplicação web que aplique os principais conceitos de JavaScript, incluindo:
- Manipulação do DOM
- Programação assíncrona
- Uso de objetos e arrays
- Persistência de dados no navegador
- Boas práticas de organização e UX

---

## Funcionalidades

- Cadastro e login de usuários
- Persistência de usuário logado
- Catálogo de produtos carregado via **Fetch API**
- Filtro de produtos
- Carrinho de compras associado ao usuário
- Finalização de compra
- Página "Minhas Compras"
- Proteção de rotas (impede compra sem login)
- Interface responsiva

---

## Tecnologias Utilizadas

- HTML5 (semântico)
- CSS3 (layout responsivo)
- JavaScript (ES6+)
- Fetch API
- LocalStorage (Web Storage)

---

## Requisição Assíncrona (Fetch API)

Os produtos do catálogo são carregados a partir de um arquivo JSON local (`data/produtos.json`) utilizando **Fetch API** com **async/await**, incluindo:

- Exibição de loading durante o carregamento
- Tratamento de erros com `try/catch`
- Renderização dinâmica no DOM

Exemplo:

```js
const response = await fetch("../data/produtos.json");
const produtos = await response.json();

Persistência de Dados
- Usuários cadastrados
- Sessão do usuário logado
- Carrinho individual por usuário
- Histórico de compras
- Todos os dados são armazenados utilizando localStorage.


PROJETO-SAROM-KIDS
├── css/
│   ├── style.css
│   ├── catalogo.css
│   ├── carrinho.css
│   ├── login.css
│   └── compras.css
│
├── js/
│   ├── auth.js
│   ├── cadastro.js
│   ├── login.js
│   ├── catalogo.js
│   ├── carrinho.js
│   ├── minhas-compras.js
│   └── carrossel.js
│
├── html/
│   ├── index.html
│   ├── cadastro.html
│   ├── login.html
│   ├── catalogo.html
│   ├── carrinho.html
│   ├── minhas-compras.html
│   ├── promocoes.html
│   ├── contato.html
│   └── sobre.html
│
├── data/
│   └── produtos.json
│
├── imagem/
│   ├── SaromLogo.png
│   └── familia.JPG
│
└── README.md

UI/UX & Acessibilidade
- Layout responsivo (mobile-first)
- HTML semântico
- Feedback visual para ações do usuário
- Navegação clara
- Contraste adequado de cores

Como Executar o Projeto
- Faça o download ou clone do repositório
- Abra o projeto no VS Code
- Utilize a extensão Live Server
- Abra o arquivo html/index.html
⚠️ O uso de servidor local é recomendado para garantir o funcionamento correto do fetch.

Limitações
- Projeto sem backend
- Autenticação apenas client-side
- Dados não persistem fora do navegador

Uso de Inteligência Artificial
Este projeto utilizou ferramentas de Inteligência Artificial como apoio para:
- Organização de lógica
- Revisão de código
- Boas práticas
- Documentação

Checklist de Requisitos Atendidos
 - Estruturas básicas (variáveis, condicionais, laços, funções)
 - Objetos e Arrays com métodos (map, filter, find, reduce)
 - Arrow functions
 - Manipulação do DOM
 - Requisição assíncrona com Fetch API
 - async/await e tratamento de erros
 - Web Storage (localStorage)
 - Layout responsivo e acessível
 - Organização do código
 - README completo


Autor
Daniel Bezerra Valiati