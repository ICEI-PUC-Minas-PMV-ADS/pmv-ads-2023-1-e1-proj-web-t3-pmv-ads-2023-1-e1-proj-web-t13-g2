function irParaPet(img,nome,idade) {
  window.location.href = "../pet/pet.html";
  localStorage.setItem("imagem",img)
  localStorage.setItem("nome",nome)
  localStorage.setItem("idade",`${idade} anos`)
}

function count() {
  setInterval(() => {
    console.log(Date.now(), 1000);
  });
}
