const petImg = document.getElementById("imgPet");
const petDescription = document.getElementById("description");

const petDataString = localStorage.getItem("pet");

const petData = JSON.parse(petDataString);

petImg.src = petData.img;
petDescription.innerText = petData.description;
