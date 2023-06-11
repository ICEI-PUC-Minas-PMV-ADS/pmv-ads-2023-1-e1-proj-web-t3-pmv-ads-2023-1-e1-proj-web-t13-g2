const petImg = document.getElementById("imgPet");
const petDescription = document.getElementById("description");
const petName = document.getElementById("name");
const petIdade = document.getElementById("idade");
const petSexo = document.getElementById("sexo");

const petDataString = localStorage.getItem("pet");

const petData = JSON.parse(petDataString);

petImg.src = petData.img;
petName.innerText = petData.sexo === 'male' ? 'Adote o ' + petData.name : ' Adote a ' + petData.name
petIdade.innerText = petData.idade > 1 ? petData.idade + ' anos' : petData.idade + ' ano'
petDescription.innerText = petData.description;
petSexo.innerText = petData.sexo === 'male' ? 'Sexo : macho' : 'Sexo: fêmea'

