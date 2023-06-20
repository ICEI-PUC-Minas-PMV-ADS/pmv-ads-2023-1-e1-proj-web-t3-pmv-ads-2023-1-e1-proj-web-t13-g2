const clients = [
  {
    "nome": "Adim Teste",
    "email": "teste@gmail.com",
    "senha": "Senha123"
  },
  {
    "nome": "Ercules Mauricio",
    "email": "ercules@hotmail.com",
    "senha": "Ercules123"
  }
];

const pets = [
  {
    id: 1,
    name: "Gilmar",
    img: "../adotar/img/petGilmar.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 4,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: 2,
    name: "Lucas",
    img: "../adotar/img/petLucas.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 6,
    adotado: false,
    sexo: "male",
    tipo: "dog",
  },
  {
    id: 3,
    name: "Mari",
    img: "../adotar/img/petMari.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 1,
    adotado: false,
    sexo: "female",
    tipo: "cat",
  },
  {
    id: 4,
    name: "Nix",
    img: "https://www.worten.pt/i/f28495f34f6e4c25abfc83a54aa79d03117e0ade",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 1,
    adotado: false,
    sexo: "female",
    tipo: "dog",
  },
  {
    id: 5,
    name: "Duke",
    img: "https://ychef.files.bbci.co.uk/1600x900/p07ryyyj.webp",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 1,
    adotado: false,
    sexo: "male",
    tipo: "cat",
  },
  {
    id: 6,
    name: "Jack",
    img: "../adotar/img/petJack.png",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 2,
    adotado: false,
    sexo: "male",
    tipo: "dog",
  },
  {
    id: 7,
    name: "Beti",
    img: "../adotar/img/petBeti.jpg",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 3,
    adotado: false,
    sexo: "female",
    tipo: "dog",
  },
  {
    id: 8,
    name: "Tico",
    img: "../adotar/img/petTico.jpg",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 4,
    adotado: false,
    sexo: "male",
    tipo: "bird",
  },
  {
    id: 9,
    name: "Duke",
    img: "https://s2-g1.glbimg.com/PVXnsJLZlnG2oxQQn7v0EiWn8WI=/0x0:800x533/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/4/u/1eLAF4TSKq45lEHD2KVw/filhote-deve-ter-nascido-ha-cerca-de-quatro-meses-segundo-equipes-do-zoologico-de-curitiba.jpg",
    description:
      "Esse pet é uma doçura de fofo, além de ser muito educado e prestativo quando o assunto é deixar o seu dia mais feliz, não tenho dúvida disso. Por isso é com pesar que disponibilizo ele para adoção!",
    idade: 4,
    adotado: false,
    sexo: "male",
    tipo: "bird",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  loadClientsData();
  loadPetsData();
})

function loadClientsData() {
  let localStorageClients = localStorage.getItem("clients");
  
  if (!localStorageClients)
    localStorage.setItem("clients", JSON.stringify(clients));
}

function loadPetsData() {
  let localStoragePets = localStorage.getItem("pets");
  
  if (!localStoragePets)
    localStorage.setItem("pets", JSON.stringify(pets));
}
