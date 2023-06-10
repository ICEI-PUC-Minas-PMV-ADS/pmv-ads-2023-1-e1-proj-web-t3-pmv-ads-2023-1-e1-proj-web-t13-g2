// Pegando os dados do pet e jogando na página de adotar
let pets = [];
let localStoragePets = localStorage.getItem("pets");
pets = [...JSON.parse(localStoragePets)];

pets.map((pet) => {
  const parentElement = document.getElementById("petsContainer1");

  parentElement.innerHTML += `<div class="pet" id="${pet.id}"><img src="${
    pet.img
  }" alt="Foto do Pet" /><div class="details"><h2 class="namePet">Adote ${
    pet.sexo === "male" ? "o " + pet.name : "a " + pet.name
  }</h2><p>${pet.idade} anos</p></div><button onclick="irParaPet(${
    pet.id
  })" class="moreDetails">Mais detalhes</button></div>`;
});

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

function toogle(propiedade, contentPropiedade) {
  let petsFiltered = pets.filter((pet) => pet[propiedade] != contentPropiedade);

  let p = [];
  for (pet of petsFiltered) {
    p.push(document.getElementById(pet.id));
  }
  console.log(p);
  let pClassesCss = [];
  p.map((pet) => {
    if (!!pet) {
      pClassesCss = [...pet.classList];
      if (pClassesCss.includes("remove") && !!pet) {
        pet.classList.remove("remove");
        return;
      }
      pet.classList.add("remove");
    }
  });
  petsFiltered = "";
}

function chekboxIdade(propiedade, logicaIdade, idade) {
  let petsFiltered = "";
  switch (logicaIdade) {
    case "maior": {
      petsFiltered = pets.filter((pet) => !(pet[propiedade] > idade));
      break;
    }
    case "menorOuIgual": {
      petsFiltered = pets.filter((pet) => !(pet[propiedade] <= idade));
      break;
    }
    default:
      return;
  }

  let p = [];
  for (pet of petsFiltered) {
    p.push(document.getElementById(pet.id));
  }
  console.log(p);
  let pClassesCss = [];
  p.map((pet) => {
    if (!!pet) {
      pClassesCss = [...pet.classList];
      if (pClassesCss.includes("remove") && !!pet) {
        pet.classList.remove("remove");
        return;
      }
      pet.classList.add("remove");
    }
  });
  petsFiltered = "";
}

function filterBirds() {
  toogle("tipo", "bird");
}

function filterDogs() {
  toogle("tipo", "dog");
}

function filterCats() {
  toogle("tipo", "cat");
}

function filterFemale() {
  toogle("sexo", "female");
}

function filterMale() {
  toogle("sexo", "male");
}

function filterMore5Years() {
  chekboxIdade("idade", "maior", 5);
}

function filterMinus5Years() {
  chekboxIdade("idade", "menorOuIgual", 5);
}

function filterMinus2Years() {
  chekboxIdade("idade", "menorOuIgual", 2);
}

const showFilters = () => {
  let filters = document.getElementsByClassName("filters")[0];
  let contentFilters = document.getElementsByClassName("contentFilters")[0];

  let classOfFilters = [...filters.classList];

  if (!!classOfFilters.includes("removeFilters")) {
    filters.classList.remove("removeFilters");
    contentFilters.classList.remove("remove");
  } else {
    filters.classList.add("removeFilters");
    contentFilters.classList.add("remove");
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

function showMobileMenu() {
  mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.classList.contains("hiddenMenu")) {
    mobileMenu.classList.remove("hiddenMenu");
    mobileMenu.classList.add("visibleMenu");
  } else {
    mobileMenu.classList.remove("visibleMenu");
    mobileMenu.classList.add("hiddenMenu");
  }
}

function teste(){
  let arrayDeArray = [] //Aqui vamos salvar os arrays dos objetos que forma filtrados, lembrando que é o array que vai entrar não os valores dele

  let resultado = arrayDeArray.filter
}

function filtro(){
  //Primeiro passo: Vamos fazer o filtro separado de cada coisa
  //Segundo passo: Salvar o resultado de cada filtro dentro de um array, ou seja, vamos ter um array de arrays
  //Terceiro passo: Filtrar qual id está aparecendo em todos os arrays, assim teremos o filtro de acordo com oq foi selecionado
}