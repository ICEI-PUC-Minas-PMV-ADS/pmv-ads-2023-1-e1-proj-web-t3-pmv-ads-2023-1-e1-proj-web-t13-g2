const petPhoto = document.getElementById("petPhoto");
const petName = document.getElementById("petName");
const petAge = document.getElementById("petAge");
const petDescription = document.getElementById("petDescription");
const petSex = document.getElementById("petSex");
let pet = resolvePetData();

document.addEventListener("DOMContentLoaded", () => {
  renderPetCard();
})

function renderPetCard() {
  petPhoto.src = pet.img;
  petName.innerText =
  pet.sexo === "male"
    ? "Adote o " + pet.name
    : " Adote a " + pet.name;
  petAge.innerText =
  pet.idade > 1 ? pet.idade + " anos" : pet.idade + " ano";
  petDescription.innerText = pet.description;
  petSex.innerText = pet.sexo === "male" ? "Sexo : macho" : "Sexo: fêmea";
}

function resolvePetData() {
  let localStoragePet = localStorage.getItem("pet");
  return JSON.parse(localStoragePet);
}

function voceAdotou() {
  window.confirm("Parabéns você adotou o pet!");
}
