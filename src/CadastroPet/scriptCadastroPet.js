const form = document.getElementById("form")
const petName = document.getElementById("petName")
const petPhoto = document.getElementById("petPhoto")
const petAge = document.getElementById("petAge")
const petSex = document.getElementById("petSex")
const petDescription = document.getElementById("petDescription")
const register = document.getElementById("register")

form.addEventListener('submit', (event) => {
    let listError = []
    event.preventDefault()
    
    petNameValidation()
    petPhotoValidation()
    petAgeValidation()
    petSexValidation()
    petDescriptionValidation()

    if(listError.length === 0){
        form.submit()
    }
})

function petNameValidation(){
    let name = petName.value.replace(/ /g, "")
    if(name === ""){
        petName.showErrorMessage("Preencha o nome do Pet")
    }
    else if (name.length < 3){
        petName.showErrorMessage("O nome do pet deve ter pelo menos 3 caracteres")
    }
    else{
        petName.clearErrorMessage()
    }
}

function petPhotoValidation(){
    if(petPhoto.value === ""){
        petPhoto.showErrorMessage("Envie a foto do Pet")
    }
    else{
        petPhoto.clearErrorMessage()
    }
}

function petAgeValidation(){
    if(petAge.value === ""){
        petAge.showErrorMessage("Preencha a idade do Pet")
    }
    else if(petAge.value < 0){
        petAge.showErrorMessage("Preencha com uma idade valida")
    }
    else if(petAge.value > 30){
        petAge.showErrorMessage("O Pet não pode ter mais de 30 anos")
    }
    else{
        petAge.clearErrorMessage()
    }
}

function petSexValidation(){
    let sexM = petSex.querySelector("#petSexM")
    let sexF = petSex.querySelector("#petSexF")
    
    if(sexM.checked !== true && sexF.checked !== true){
        petSex.showErrorMessage("Preencha o sexo do Pet")
    }
    else{
        petSex.clearErrorMessage()
    }
}

function petDescriptionValidation(){
    if(petDescription.value === ""){
        petDescription.showErrorMessage("Preencha a descrição do Pet")
    }
    else if(petDescription.value.length > 150){
        petDescription.showErrorMessage("A descrição do Pet não pode ter mais de 150 caracteres")
    }
    else{
        petDescription.clearErrorMessage()
    }
}

HTMLElement.prototype.showErrorMessage = function (message) {
    this.classList.add("invalid")
    let error = this.parentElement.querySelector(".error")
    error.innerText = message
}

HTMLElement.prototype.clearErrorMessage = function () {
    this.classList.remove("invalid");
    let error = this.parentElement.querySelector(".error")
    error.innerText = ""
}