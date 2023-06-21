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
  petName.innerText += ` ${pet.name}`;
  petAge.innerText += ` ${pet.idade} ${pet.idade > 1 ? "anos" : "ano"}`;
  petDescription.innerText = pet.description;
  petSex.innerText += ` ${pet.sexo}`;
}

function resolvePetData() {
  let localStoragePet = localStorage.getItem("pet");
  return JSON.parse(localStoragePet);
}

function voceAdotou() {
  window.confirm("Parabéns você adotou o pet!");
}
