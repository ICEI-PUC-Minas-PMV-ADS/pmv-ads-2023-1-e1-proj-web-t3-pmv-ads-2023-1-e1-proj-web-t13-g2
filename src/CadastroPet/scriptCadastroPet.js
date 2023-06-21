const form = document.getElementById("form");
const petName = document.getElementById("petName");
const petType = document.getElementById("petType");
const petPhoto = document.getElementById("petPhoto");
const petAge = document.getElementById("petAge");
const petSex = document.getElementById("petSex");
const petDescription = document.getElementById("petDescription");
let pets = resolvePetData();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  petNameValidation();
  petTypeValidation();
  petPhotoValidation();
  petAgeValidation();
  petSexValidation();
  petDescriptionValidation();

  if (document.getElementsByClassName("invalid").length == 0) {
    savePetData();
    window.location.href = "../adotar/adotar.html";
  }
});

function petNameValidation() {
  let name = petName.value.replace(/ /g, "");
  if (name === "") {
    petName.showErrorMessage("Preencha o nome do Pet");
  } else if (name.length < 3) {
    petName.showErrorMessage("O nome do pet deve ter pelo menos 3 caracteres");
  } else {
    petName.clearErrorMessage();
  }
}

function petTypeValidation() {
  if (petType.value === "") {
    petType.showErrorMessage("Selecione o tipo do Pet");
  } else {
    petType.clearErrorMessage();
  }
}

function petPhotoValidation() {
  if (petPhoto.value === "") {
    petPhoto.showErrorMessage("Preencha o link da foto do Pet");
  } else if (!/^https:\/\/.+\.com\/.+$/.test(petPhoto.value)) {
    petPhoto.showErrorMessage("Formato de link inválido");
  } else {
    petPhoto.clearErrorMessage();
  }
}

function petAgeValidation() {
  if (petAge.value === "") {
    petAge.showErrorMessage("Preencha a idade do Pet");
  } else if (petAge.value < 0) {
    petAge.showErrorMessage("Preencha com uma idade valida");
  } else if (petAge.value > 30) {
    petAge.showErrorMessage("O Pet não pode ter mais de 30 anos");
  } else {
    petAge.clearErrorMessage();
  }
}

function petSexValidation() {
  let sexM = petSex.querySelector("#petSexM");
  let sexF = petSex.querySelector("#petSexF");

  if (sexM.checked !== true && sexF.checked !== true) {
    petSex.showErrorMessage("Selecione o sexo do Pet");
  } else {
    petSex.clearErrorMessage();
  }
}

function petDescriptionValidation() {
  if (petDescription.value === "") {
    petDescription.showErrorMessage("Preencha a descrição do Pet");
  } else if (petDescription.value.length > 120) {
    petDescription.showErrorMessage("A descrição do Pet não pode ter mais de 120 caracteres");
  } else {
    petDescription.clearErrorMessage();
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

function resolvePetData() {
  let localStoragePets = localStorage.getItem("pets");

  let pets = [];
  if (localStoragePets) {
    pets = JSON.parse(localStoragePets);
  }

  return pets;
}

function savePetData() {
  pets.push(builPet(pets.length));
  localStorage.setItem("pets", JSON.stringify(pets));
}

function builPet(petsQtde) {
  let selectedSex = petSex.querySelector("#petSexM").checked
    ? petSex.querySelector("#petSexM").value
    : petSex.querySelector("#petSexF").value;

  return {
    id: petsQtde + 1,
    name: petName.value,
    img: petPhoto.value,
    description: petDescription.value,
    idade: petAge.value,
    adotado: false,
    sexo: selectedSex,
    tipo: petType.value,
  };
}
