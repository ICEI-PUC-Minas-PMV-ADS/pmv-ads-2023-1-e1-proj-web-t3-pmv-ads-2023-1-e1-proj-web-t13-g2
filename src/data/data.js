const clients = [
  {
    nome: "Adim Teste",
    email: "teste@gmail.com",
    senha: "Senha123",
  }
];

const pets = [
  {
    id: 1,
    name: "Gilmar",
    img: "../adotar/img/petGilmar.png",
    description:
      "Um charmoso felino com olhos hipnotizantes e personalidade tranquila.",
    idade: 4,
    adotado: false,
    sexo: "Masculino",
    tipo: "cat",
  },
  {
    id: 2,
    name: "Lucas",
    img: "../adotar/img/petLucas.png",
    description:
      "Um leal companheiro de quatro patas, brincalhão e cheio de energia.",
    idade: 6,
    adotado: false,
    sexo: "Masculino",
    tipo: "dog",
  },
  {
    id: 3,
    name: "Mari",
    img: "../adotar/img/petMari.png",
    description:
      "Uma gatinha jovem e curiosa, sempre pronta para explorar e receber carinhos.",
    idade: 1,
    adotado: false,
    sexo: "Feminino",
    tipo: "cat",
  },
  {
    id: 4,
    name: "Nix",
    img: "https://www.worten.pt/i/f28495f34f6e4c25abfc83a54aa79d03117e0ade",
    description:
      "Uma adorável filhote canina, cheia de energia e pronta para aprender e brincar.",
    idade: 1,
    adotado: false,
    sexo: "Feminino",
    tipo: "dog",
  },
  {
    id: 5,
    name: "Duke",
    img: "https://ychef.files.bbci.co.uk/1600x900/p07ryyyj.webp",
    description:
      "Um felino aventureiro e amoroso, que adora explorar e se aninhar nos colos.",
    idade: 1,
    adotado: false,
    sexo: "Masculino",
    tipo: "cat",
  },
  {
    id: 6,
    name: "Jack",
    img: "../adotar/img/petJack.png",
    description:
      "Um cão inteligente e brincalhão, sempre disposto a acompanhar seu tutor em aventuras.",
    idade: 2,
    adotado: false,
    sexo: "Masculino",
    tipo: "dog",
  },
  {
    id: 7,
    name: "Beti",
    img: "../adotar/img/petBeti.jpg",
    description:
      "Uma cadelinha doce e carinhosa, pronta para ser o melhor amigo de alguém para sempre.",
    idade: 3,
    adotado: false,
    sexo: "Feminino",
    tipo: "dog",
  },
  {
    id: 8,
    name: "Tico",
    img: "../adotar/img/petTico.jpg",
    description:
      "Um pássaro encantador, que alegra qualquer ambiente com seu canto melodioso.",
    idade: 4,
    adotado: false,
    sexo: "Masculino",
    tipo: "bird",
  },
  {
    id: 9,
    name: "Calu",
    img: "https://s2-g1.glbimg.com/PVXnsJLZlnG2oxQQn7v0EiWn8WI=/0x0:800x533/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/4/u/1eLAF4TSKq45lEHD2KVw/filhote-deve-ter-nascido-ha-cerca-de-quatro-meses-segundo-equipes-do-zoologico-de-curitiba.jpg",
    description:
      "Uma bela ave com penas vibrantes, que traz vida e alegria para qualquer espaço com seu canto harmonioso.",
    idade: 3,
    adotado: false,
    sexo: "Feminino",
    tipo: "bird",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  loadClientsData();
  loadPetsData();
});

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
