const petElement = document.getElementById("imgPet");
const petDescription = document.getElementById("description");

const petDataString = localStorage.getItem("pet");

const petData = JSON.parse(petDataString);

petElement.src = petData.img;
petDescription.innerText = petData.description;

console.log(petDescription);
