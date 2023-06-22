// Pegando os dados do pet e jogando na página de adotar
let pets = [];
let localStoragePets = localStorage.getItem("pets");
pets = [...JSON.parse(localStoragePets)];
petsFiltered = []
let petsElments = []

function renderPets(pet) {
  const parentElement = document.getElementById("petsContainer1");

  parentElement.innerHTML += `
  <div class="pet" id="${pet.id}">
    <img src="${pet.img}" alt="Foto do Pet" />
    <div class="details">
      <h2 class="namePet">Adote ${pet.sexo === "Masculino" ? "o " + pet.name : "a " + pet.name}</h2>
      <p>${pet.idade} ${pet.idade > 1 ? "anos" : "ano"}</p>
    </div>
    <button onclick="irParaPet(${pet.id})" class="moreDetails">Mais detalhes</button>
  </div>
  `;
}

function getPets() {
  petsElments = [...document.getElementsByClassName('pet')];
  petsElments.map((pet) => pet.remove())

  if (petsFiltered.length == 0) {
    pets.map((pet) => renderPets(pet));
    return
  } else {
    petsFiltered.map((pet) => renderPets(pet))
    petsFiltered = []
    return
  }
}
getPets()

// Ir para página do pet específico
function irParaPet(id) {
  console.log(pets);
  if (!!id) {
    console.log(id);
    const pet = pets.filter((pet) => pet.id === id);

    localStorage.setItem("pet", JSON.stringify(pet[0]));
  }

  window.location.href = "../pet/pet.html";
}

// Ocultar o btn filters
const showFilters = () => {
  let filters = document.getElementsByClassName("filters")[0];
  let contentFilters = document.getElementsByClassName("contentFilters")[0];
  let btnFilter = document.getElementsByClassName("filtersPets")[0];


  let classOfFilters = [...filters.classList];

  if (!!classOfFilters.includes("removeFilters")) {
    filters.classList.remove("removeFilters");
    contentFilters.classList.remove("remove");
    btnFilter.classList.remove("remove");
  } else {
    filters.classList.add("removeFilters");
    contentFilters.classList.add("remove");
    btnFilter.classList.add("remove");
  }
  changeSvg();
};

const changeSvg = () => {
  let img = document.getElementById("imgShowFilters");

  img.src =
    img.src === "img/caret-down.svg" || img.src.includes("img/caret-down.svg")
      ? "img/caret-right.svg"
      : "img/caret-down.svg";
};

function filtersPets() {
  let inputs = [...document.getElementsByTagName("input")]
  let inputsChecked = []
  let arraysComPets = []

  for (input of inputs) {
    inputsChecked.push(input.checked)
    input.checked = false
  }

  let filters = {
    tipoBird: inputsChecked[0],
    tipoDog: inputsChecked[1],
    tipoCat: inputsChecked[2],
    sexoFemale: inputsChecked[3],
    sexoMale: inputsChecked[4]
  }


  arraysComPets.push(filters.tipoBird ? pets.filter((pet) => pet.tipo === 'bird') : [])
  arraysComPets.push(filters.tipoDog ? pets.filter((pet) => pet.tipo === 'dog') : [])
  arraysComPets.push(filters.tipoCat ? pets.filter((pet) => pet.tipo === 'cat') : [])

  arraysComPets.push(filters.sexoFemale ? pets.filter((pet) => pet.sexo === 'Feminino') : [])
  arraysComPets.push(filters.sexoMale ? pets.filter((pet) => pet.sexo === 'Masculino') : [])

  let idPetsFiltered = petsFiltered.map((pets) => pets.id)

  for (arrayPets of arraysComPets) {
    arrayPets.map((array) => {
      if (!idPetsFiltered.includes(array.id)) {
        petsFiltered.push(array)
      }
    })
  }
  getPets()

}
