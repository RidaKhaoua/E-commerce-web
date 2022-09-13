import { showError, clearSmall, checkAnyInputIsEmpty } from "./script.js";
// get username
const inputUserName = document.querySelector("#username"); 

// get email 
const inputEmail = document.querySelector("#email");

// get password 
const inputPassword = document.querySelector("#password");

// get comfirme password
const inputConfirmePassword = document.querySelector("#confirmepassword");

// get button register
const btnRegister = document.querySelector("#register");

// Events
checkSession();

inputUserName.addEventListener("change", function (params) {
    sessionStorage.setItem("username", this.value);
})

inputEmail.addEventListener("change", function (params) {
    sessionStorage.setItem("email", inputEmail.value)
})


btnRegister.addEventListener("click", function (e) {
    e.preventDefault();

    if(verification()) {
        saveData();
        location.href="index.html";
    }
})

// function
/*
    * This function verifiy the inputs
*/
function verification() {
    /*
        * This function clear the element small 
   */
    clearSmall();

    if (
        inputUserName.value.length === 0 ||
        inputEmail.value.length === 0 ||
        inputPassword.value.length === 0 ||
        inputConfirmePassword.value.length === 0
    ) {
        checkAnyInputIsEmpty();
        return false;
    }
    if (!/^[a-z A-Z 0-9]+$/.test(inputUserName.value)) {
        showError(
            inputUserName,
            "the value is incorrect can not contains the special caracters",
            "error"
    );
    return false;
}

    if (!/^[a-zA-Z0-9_.]+[@][a-z]+[.][a-z]{1,5}$/.test(inputEmail.value)) {
        showError(inputEmail, "the email is incorrect", "error");
        return false;
    }

    if (inputPassword.value !== inputConfirmePassword.value) {
        showError(inputConfirmePassword, "the passwords are not same", "error");
        return false;
    }

    return true;
}




function saveData(params) {
    if(localStorage.getItem("users")) {
        const getDtata = JSON.parse(localStorage.getItem("users"));
        const user = { };
        user.username = inputUserName.value;
        user.email = inputEmail.value;
        user.password = inputPassword.value;
        getDtata.push(user);
        localStorage.setItem("users", JSON.stringify(getDtata));
        isLogged();
        alert("data is inserted");
    }
}


function  checkSession(params) {
    if(sessionStorage.getItem("username")) {
        inputUserName.value = sessionStorage.getItem("username")
    }
    if(sessionStorage.getItem('email')) {
        inputEmail.value = sessionStorage.getItem("email");
    }
}

function isLogged(params) {
    if(!localStorage.getItem("logged")) {
        localStorage.setItem("logged", JSON.stringify({}));
    }
    const getData = JSON.parse(localStorage.getItem("logged"));
    getData.username = inputUserName.value;
    getData.password = inputPassword.value;
    localStorage.setItem("logged", JSON.stringify(getData));
}

