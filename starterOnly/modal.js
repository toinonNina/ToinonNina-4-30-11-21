// DOM Elements
//modal base
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnCloseModal = document.querySelector(".closemodal");
// input form
const formControl = document.getElementById("formcontrol");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
//radio et checkbox
const locationUn = document.getElementById("location1");
const locationDeux = document.getElementById("location2");
const locationTrois = document.getElementById("location3");
const locationQuatre = document.getElementById("location4");
const locationCinq = document.getElementById("location5");
const locationSix = document.getElementById("location6");
const checkCondition = document.getElementById("checkbox1");
// message d'erreur
const alertFirstName = document.getElementById("alertfirstname");
const alertLastName = document.getElementById("alertlastname");
const alertEmail = document.getElementById("alertemail");
const alertBirthdate = document.getElementById("alertbirthdate");
const alertQuantity = document.getElementById("alertquantity");
const alertTown = document.getElementById("alerttown");
const alertCondition = document.getElementById("alertcondition");

const submitForm = document.getElementById("submitform");

const launchValidation = document.querySelector(".modalthankyou");
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
    //controle prénom
    const regExControlname = /^[A-Za-z-àâäéèêëïîôöùûüç]{2,15}$/;
    if (!regExControlname.test(firstname.value) || firstname.value == "") {
        alertFirstName.innerHTML = "Ne doit contenir que des lettres (au moins 2)";
        return false;
    } else {
        alertFirstName.innerHTML = "";
    }
    // controle nom de famille
    if (!regExControlname.test(lastname.value) || lastname.value == "") {
        alertLastName.innerHTML = "Ne doit contenir que des lettres (au moins 2)";
        return false;
    } else {
        alertLastName.innerHTML = "";
    }
    // controle de l'email
    const regExControlEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,}$/g;
    if (!regExControlEmail.test(email.value) || email.value == "") {
        alertEmail.innerHTML = "veuillez entrer une adresse mail valide";
        return false;
    } else {
        alertEmail.innerHTML = "";
    }
    // controle du format de la date de naissance
    const regExControlBirthdate = /^\d{4}\-\d{2}\-\d{2}$/;
    if (!regExControlBirthdate.test(birthdate.value) || birthdate.value == "") {
        alertBirthdate.innerHTML = "veuillez remplir ce champs";
        return false;
    } else {
        alertBirthdate.innerHTML = "";
    }
    //on vérifie que la valeur est bien est un chiffre même si l'input est typé en number 
    const RegExControlQuantity = /^[0-9]$/;
    if (!RegExControlQuantity.test(quantity.value) || quantity.value == "") {
        alertQuantity.innerHTML = "veuillez rentrer au moins un chiffre";
        return false;
    } else {
        alertQuantity.innerHTML = "";
    }
    // on vérifie si une radio a été cochée 
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
    // on vérifie que la checkbox des conditions soient cochées
    if (!checkCondition.checked) {
        alertCondition.innerHTML = "veuillez acceptez les termes et conditions";
        return false;
    } else {
        alertCondition.innerHTML = "";
    }
    return true;
}

// fonction qui va reset le formulaire aprés submit
function resetForm() {
    document.getElementById("formcontrol").reset();
}

//envois du formulaire avec la condition que les controles de celui ci soit en true , on reset, on enlève le formulaire 
//et fait apparaitre a la place le modal de remerciement. on écoute le bouton fermer pour fermer la validation et retourner sur la base du site
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