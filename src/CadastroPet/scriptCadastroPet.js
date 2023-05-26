const petName = document.querySelector("#petName")
const petAge = document.querySelector("#petAge")
const petDescription = document.querySelector("#petDescription")
const register = document.querySelector("#register")

register.addEventListener("click", (event) => {
    event.preventDefault()
    petNameValidation()
    petAgeValidation()
    petDescriptionValidation()
})

function petNameValidation(){
    let name = petName.value.replace(/ /g, "")
    if(name === ""){
        alert("Preencha o nome do seu Pet")
    }
    if (name.length < 3){
        alert("O nome do pet deve ter pelo menos 3 caracteres")
    }
}

function petAgeValidation(){

}

function petDescriptionValidation(){

}