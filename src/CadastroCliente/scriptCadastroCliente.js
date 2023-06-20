const form = document.getElementById("form");
const clientName = document.getElementById("clientName");
const clientEmail = document.getElementById("clientEmail");
const clientPassword = document.getElementById("clientPassword");
const confirmClientPassword = document.getElementById("confirmClientPassword");
let clients = resolveClientData();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  nameValidation();
  emailValidation();
  passwordValidation();
  confirmPasswordValidation();

  if (document.getElementsByClassName("invalid").length == 0) {
    saveClientData();
    window.location.href = "../login/login.html";
  }
});

function nameValidation() {
  let fullName = clientName.value.replace(/ /g, "");
  let nameParts = clientName.value.trim().split(" ");
  let firstName = nameParts[0];
  let lastName = nameParts.slice(1).join("");
  if (fullName === "") {
    clientName.showErrorMessage("Preencha seu nome");
  } else if (firstName.length < 3) {
    clientName.showErrorMessage("O seu nome deve ter pelo menos 3 caracteres");
  } else if (lastName === "") {
    clientName.showErrorMessage("Preencha seu sobrenome");
  } else if (lastName.length < 3) {
    clientName.showErrorMessage("O seu sobrenome deve ter pelo menos 3 caracteres");
  } else {
    clientName.clearErrorMessage();
  }
}

function emailValidation() {
  if (clientEmail.value === "") {
    clientEmail.showErrorMessage("Preencha seu e-mail");
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z]+\.(com)$/.test(clientEmail.value)) {
    clientEmail.showErrorMessage("Formato de e-mail inválido");
  } else if (clients.find((client) => client.email === clientEmail.value)) {
    clientEmail.showErrorMessage("E-mail já cadastrado");
  } else {
    clientEmail.clearErrorMessage();
  }
}

function passwordValidation() {
  let password = clientPassword.value.replace(/ /g, "");
  if (password === "") {
    clientPassword.showErrorMessage("Preencha sua senha");
  } else if (clientPassword.value !== password) {
    clientPassword.showErrorMessage("Sua senha não pode conter espaços em branco");
  } else if (password.length < 8) {
    clientPassword.showErrorMessage("Sua senha deve ter no mínimo 8 caracteres");
  } else {
    clientPassword.clearErrorMessage();
  }
}

function confirmPasswordValidation() {
  if (confirmClientPassword.value === "") {
    confirmClientPassword.showErrorMessage("Confirme sua senha");
  } else if (clientPassword.value !== confirmClientPassword.value) {
    confirmClientPassword.showErrorMessage("A confirmação da senha não corresponde à senha fornecida");
  } else {
    confirmClientPassword.clearErrorMessage();
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

function saveClientData() {
  clients.push(buildClient());
  localStorage.setItem("clients", JSON.stringify(clients));
}

function buildClient() {
  return {
    nome: clientName.value,
    email: clientEmail.value,
    senha: clientPassword.value,
  };
}
