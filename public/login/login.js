const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
let clients = resolveClientData();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  emailValidation();
  senhaValidation();

  if (document.getElementsByClassName("invalid").length == 0) {
    userValidation();
  }
});

function emailValidation() {
  if (email.value === "") {
    email.showErrorMessage("Preencha seu e-mail");
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z]+\.(com)$/.test(email.value)) {
    email.showErrorMessage("Formato de email inválido");
  } else {
    email.clearErrorMessage();
  }
}

function senhaValidation() {
  if (senha.value === "") {
    senha.showErrorMessage("Preencha sua senha");
  } else {
    senha.clearErrorMessage();
  }
}

function userValidation() {
  let client = clients.find((client) => client.email === email.value);

  if (client === undefined) {
    email.showErrorMessage("Usuário não cadastrado");
  } else if (email.value === client.email && senha.value === client.senha) {
    email.clearErrorMessage();
    senha.clearErrorMessage();
    window.location.href = "../adotar/adotar.html";
  } else {
    email.showErrorMessage("A combinação de e-mail e senha está incorreta");
    senha.showErrorMessage("A combinação de e-mail e senha está incorreta");
  }
}

HTMLElement.prototype.showErrorMessage = function (message) {
  this.classList.add("invalid");
  let error = this.parentElement.querySelector(".error");
  error.innerText = message;
};

HTMLElement.prototype.clearErrorMessage = function () {
  this.classList.remove("invalid");
  let error = this.parentElement.querySelector(".error");
  error.innerText = "";
};

function resolveClientData() {
  let localStorageClients = localStorage.getItem("clients");

  let clients = [];
  if (localStorageClients) {
    clients = JSON.parse(localStorageClients);
  } else {
    clients = [
      { nome: "Adim Teste", email: "teste@gmail.com", senha: "Senha123" },
    ];
  }

  return clients;
}
