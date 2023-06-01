{
  pets.map((pet) => {
    let petElement = document.getElementById(pet.id);
    console.log(petElement);
    let imgPet = petElement.children[0];
    imgPet.src = pet.img;
    let namePet = petElement.children[1].children[0];
    namePet.textContent = "Adote o(a) " + pet.name;
    let agePet = petElement.children[1].children[1];
    agePet.textContent = pet.idade + " anos";
  });
}

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
  const petsFiltered = pets.filter(
    (pet) => pet[propiedade] != contentPropiedade
  );

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

function filterFemale() {}

function filterMale() {}

function filterMore5Years() {}

function filterMinus5Years() {}
