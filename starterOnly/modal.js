// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".closemodal");

const formControl = document.getElementById("formcontrol");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");

let locationUn = document.getElementById("location1");
let locationDeux = document.getElementById("location2");
let locationTrois = document.getElementById("location3");
let locationQuatre = document.getElementById("location4");
let locationCinq = document.getElementById("location5");
let locationSix = document.getElementById("location6");
let checkCondition = document.getElementById("checkbox1");

let alertFirstName = document.getElementById("alertfirstname");
let alertLastName = document.getElementById("alertlastname");
let alertEmail = document.getElementById("alertemail");
let alertBirthdate = document.getElementById("alertbirthdate");
let alertQuantity = document.getElementById("alertquantity");
let alertTown = document.getElementById("alerttown");
let alertCondition = document.getElementById("alertcondition");

const messageconfirm = document.querySelector("#messageconfirm");
let submitForm = document.getElementById("submitform");

let launchValidation = document.querySelector(".modalthankyou");
const closeValidation = document.querySelector(".closevalid");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
    launchValidation.style.display = "none";
}

// close modal form event
btnCloseModal.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
    launchValidation.style.display = "none";
}


// fonction qui va controler les différents input et insérer des message d'erreur dans le html
function controlInputs() {
    const regExControlname = /^[A-Za-z-àâäéèêëïîôöùûüç]{2,15}$/;
    if (!regExControlname.test(firstname.value) || firstname.value == "") {
        alertFirstName.innerHTML = "Ne doit contenir que des lettres (au moins 2)";
        return false;
    } else {
        alertFirstName.innerHTML = "";
    }

    if (!regExControlname.test(lastname.value) || lastname.value == "") {
        alertLastName.innerHTML = "Ne doit contenir que des lettres (au moins 2)";
        return false;
    } else {
        alertLastName.innerHTML = "";
    }

    const regExControlEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,}$/g;
    if (!regExControlEmail.test(email.value) || email.value == "") {
        alertEmail.innerHTML = "veuillez entrer une adresse mail valide";
        return false;
    } else {
        alertEmail.innerHTML = "";
    }

    const regExControlBirthdate = /^\d{4}\-\d{2}\-\d{2}$/;
    if (!regExControlBirthdate.test(birthdate.value) || birthdate.value == "") {
        alertBirthdate.innerHTML = "veuillez remplir ce champs";
        return false;
    } else {
        alertBirthdate.innerHTML = "";
    }
    const RegExControlQuantity = /^[0-9]$/;
    if (!RegExControlQuantity.test(quantity.value) || quantity.value == "") {
        alertQuantity.innerHTML = "veuillez rentrer au moins un chiffre";
        return false;
    } else {
        alertQuantity.innerHTML = "";
    }

    if (locationUn.checked ||
        locationDeux.checked ||
        locationTrois.checked ||
        locationQuatre.checked ||
        locationCinq.checked ||
        locationSix.checked) {
        alertTown.innerHTML = "";

    } else {
        alertTown.innerHTML = "vous devez choisir une option";
        return false;

    }

    if (!checkCondition.checked) {
        alertCondition.innerHTML = "veuillez acceptez les termes et conditions";
        return false;
    } else {
        alertCondition.innerHTML = "";
    }
    return true;
}


function resetForm() {
    document.getElementById("formcontrol").reset();
}


submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    controlInputs();
    if (controlInputs() == true) {
        resetForm(),
            modalbg.style.display = "none";
        launchValidation.style.display = "block";
        closeValidation.addEventListener("click", closeModal);
    } else { return false; }
});