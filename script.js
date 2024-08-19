// REFERENCES

const style = getComputedStyle(document.querySelector(":root"));

const firstNameInput = document.getElementById("first_name")
const lastNameInput = document.getElementById("last_name")
const emailInput = document.getElementById("email")
const phoneNumberInput = document.getElementById("phone_number");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

// VARIABLES

// FUNCTIONS

function nameCheck() {
    if(firstNameInput.value.length > 0) {
        firstNameInput.style.borderColor = style.getPropertyValue("--positive");
    } else {
        firstNameInput.style.borderColor = style.getPropertyValue("--neutral-light");
    }

    if(lastNameInput.value.length > 0) {
        lastNameInput.style.borderColor = style.getPropertyValue("--positive");
    } else {
        lastNameInput.style.borderColor = style.getPropertyValue("--neutral-light");
    }
}

function emailCheck() {
    if(/.+@.+\..+/.test(emailInput.value)) {
        emailInput.style.borderColor = style.getPropertyValue("--positive");
    } else if(!/.+@.+\..+/.test(emailInput.value) && emailInput.value != "") {
        emailInput.style.borderColor = style.getPropertyValue("--negative");
    } else {
        emailInput.style.borderColor = style.getPropertyValue("--neutral-light");
    }
}

function phoneNumberCheck() {
    let cleaned = phoneNumberInput.value.replace(/\D/g, '');

    let formatted = '';
    if (cleaned.length > 0) {
        formatted += '(' + cleaned.substring(0, 3);
    }
    if (cleaned.length > 3) {
        formatted += ') ' + cleaned.substring(3, 6);
    }
    if (cleaned.length > 6) {
        formatted += '-' + cleaned.substring(6, 10);
    }

    phoneNumberInput.value = formatted;

    if(phoneNumberInput.value.length == 14) {
        phoneNumberInput.style.borderColor = style.getPropertyValue("--positive");
    } else if(phoneNumberInput.value.length > 0) {
        phoneNumberInput.style.borderColor = style.getPropertyValue("--negative");
    } else {
        phoneNumberInput.style.borderColor = style.getPropertyValue("--neutral-light");
    }
}

function passwordCheck() {
    if(passwordInput.value == confirmPasswordInput.value && (passwordInput.value.length + confirmPasswordInput.value.length != 0)) {
        passwordInput.style.borderColor = style.getPropertyValue("--positive");
        confirmPasswordInput.style.borderColor = style.getPropertyValue("--positive");
        
        passwordInput.setCustomValidity('');
    } else {
        if(passwordInput.value.length + confirmPasswordInput.value.length == 0) {
            passwordInput.style.borderColor = style.getPropertyValue("--neutral-light");
            confirmPasswordInput.style.borderColor = style.getPropertyValue("--neutral-light");

            passwordInput.setCustomValidity('Password Must be Matching.');
        } else {
            passwordInput.style.borderColor = style.getPropertyValue("--negative");
            confirmPasswordInput.style.borderColor = style.getPropertyValue("--negative");

            passwordInput.setCustomValidity('');
        }
    }
}

// EVENTS

