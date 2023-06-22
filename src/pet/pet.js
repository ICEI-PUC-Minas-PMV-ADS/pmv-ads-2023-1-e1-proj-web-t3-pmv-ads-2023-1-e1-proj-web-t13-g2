const petPhoto = document.getElementById("petPhoto");
const petName = document.getElementById("petName");
const petAge = document.getElementById("petAge");
const petDescription = document.getElementById("petDescription");
const petSex = document.getElementById("petSex");
const overlay = document.getElementById('overlay');
let pet = resolvePetData();

document.addEventListener("DOMContentLoaded", () => {
  renderPetCard();
});

function renderPetCard() {
  petPhoto.src = pet.img;
  petName.innerText += ` ${pet.name}`;
  petAge.innerText += ` ${pet.idade} ${pet.idade > 1 ? "anos" : "ano"}`;
  petDescription.innerText = pet.description;
  petSex.innerText += ` ${pet.sexo}`;
}

function resolvePetData() {
  let localStoragePet = localStorage.getItem("pet");
  return JSON.parse(localStoragePet);
}

function displayMessage() {
  overlay.style.display = 'flex';
  overlay.innerHTML = `
  <div class="message">
    <h2>Parabéns pela sua escolha de adoção!</h2>
    <p>
      Você está prestes a mudar a vida de um animalzinho.
      Nossa equipe entrará em contato para ajudá-lo(a) no processo de adoção e 
      garantir que você e seu novo companheiro tenham uma jornada cheia de amor e felicidade.
      Juntos, vamos construir histórias incríveis de amizade e compaixão!
    </p>
    <button onclick="closeMessage()">Fechar</button>
  </div>
  `;
}

function closeMessage() {
  overlay.style.display = 'none';
  //window.location.href = "../adotar/adotar.html";
}