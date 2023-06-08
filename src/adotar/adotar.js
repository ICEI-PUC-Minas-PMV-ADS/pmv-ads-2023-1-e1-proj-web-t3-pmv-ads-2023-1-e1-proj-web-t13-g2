let localStoragePets = localStorage.getItem("pets");
console.log(localStoragePets);
if (!!localStoragePets) {
  let pets = [];
  pets = [...JSON.parse(localStoragePets)];
  console.log(pets);

  // <div class="pet" id="01">
  //   <img src="" alt="Foto do Pet" />
  //   <div class="details">
  //     <h2 class="namePet"></h2>
  //     <p></p>
  //   </div>
  //   <button onclick="irParaPet('01')" class="moreDetails">
  //     Mais detalhes
  //   </button>
  // </div>;

  {
    pets.map((pet) => {
      const parentElement = document.getElementById("petsContainer1");
      console.log(parentElement);
      console.log(pet);

      parentElement.innerHTML += `<div class="pet" id="${pet.id}"><img src="${pet.img}" alt="Foto do Pet" /><div class="details"><h2 class="namePet">${pet.name}</h2><p>${pet.idade}</p></div><button onclick="irParaPet('${pet.id}')" class="moreDetails">Mais detalhes</button></div>`;
    });
  }
}

// {
//   pets.map((pet) => {
//     let petElement = document.getElementById(pet.id);
//     console.log(petElement);
//     let imgPet = petElement.children[0];
//     imgPet.src = pet.img;
//     let namePet = petElement.children[1].children[0];
//     namePet.textContent = "Adote o(a) " + pet.name;
//     let agePet = petElement.children[1].children[1];
//     agePet.textContent = pet.idade + " anos";
//   });
// }

function irParaPet(id) {
  if (typeof id === "string") {
    console.log(id);
    const pet = pets.filter((pet) => pet.id === id);
    console.log(pet[0]);

    localStorage.setItem("pet", JSON.stringify(pet[0]));
  }

  window.location.href = "../pet/pet.html";
}

function toogle(propiedade, contentPropiedade) {
  let petsFiltered = pets.filter((pet) => pet[propiedade] != contentPropiedade);

  let p = [];
  for (pet of petsFiltered) {
    if (typeof pet.id === "string") {
      p.push(document.getElementById(pet.id));
    }
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
    if (typeof pet.id === "string") {
      p.push(document.getElementById(pet.id));
    }
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
  chekboxIdade("idade", "menorOuIgual", 3);
}

function filterMinus2Years() {
  chekboxIdade("idade", "menorOuIgual", 2);
}

const showFilters = () => {
  let filters = document.getElementsByClassName("filters")[0];
  let contentFilters = document.getElementsByClassName("contentFilters")[0];

  console.log(filters);

  let classOfFilters = [...filters.classList];

  if (!!classOfFilters.includes("removeFilters")) {
    filters.classList.remove("removeFilters");
    contentFilters.classList.remove("remove");
  } else {
    filters.classList.add("removeFilters");
    contentFilters.classList.add("remove");
  }
};
