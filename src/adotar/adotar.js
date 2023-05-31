let pets = [
  {
    id: "01",
    name: "Gilmar",
    img: "/src/adotar/img/petGilmar.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 3,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: "02",
    name: "Lucas",
    img: "/src/adotar/img/petLucas.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 6,
    adotado: false,
    sexo: "male",
    tipo: "dog",
  },

  {
    id: "03",
    name: "Mari",
    img: "/src/adotar/img/petMari.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 1,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: "04",
    name: "Gilmar",
    img: "/src/adotar/img/petGilmar.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 3,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: "06",
    name: "Jack",
    img: "/src/adotar/img/petJack.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 2,
    adotado: false,
    sexo: "male",
    tipo: "dog",
  },
  {
    id: "07",
    name: "Gilmar",
    img: "/src/adotar/img/petGilmar.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 3,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: "08",
    name: "Gilmar",
    img: "/src/adotar/img/petGilmar.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 3,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: "08",
    name: "Joaquim",
    img: "/src/adotar/img/petJoaquim.jpg",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 3,
    adotado: false,
    sexo: "male",
    tipo: "bird",
  },
];

function irParaPet(id) {
  if (typeof id === "string") {
    console.log(id);
    const pet = pets.filter((pet) => pet.id === id);
    console.log(pet[0]);

    localStorage.setItem("pet", JSON.stringify(pet[0]));
  }

  window.location.href = "/src/pet/pet.html";
}

// let petsDom = {
//   p1: document.getElementById("01"),
//   p2: document.getElementById("02"),
//   p3: document.getElementById("03"),
//   p4: document.getElementById("04"),
//   p5: document.getElementById("05"),
//   p6: document.getElementById("06"),
// };

// console.log(petsDom);

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
