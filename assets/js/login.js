import { showError, clearSmall, checkAnyInputIsEmpty, showNotification, notificationMessage } from "./script.js";
// get input username 
const inputUserName = document.querySelector(".section-form #username");

// get input password
const inputPassword = document.querySelector(".section-form #password");

// get btn login
const btnLogin = document.querySelector(".section-form #login");

// Events

btnLogin.addEventListener("click", function (e) {
    e.preventDefault();
    if(verification()) {
        signIn();
    }
})

/**function verifcation to verify if the inputs are empty and the value of input name is correct  */
function verification() {

    clearSmall();

    if(inputUserName.value.length === 0 || inputPassword.value.length === 0) {
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
    return true;
}


/**function signIn into web site */
function signIn(params) {
    // checke the localstorage has key users 
    if(localStorage.getItem("users")) {
        const getUsers = JSON.parse(localStorage.getItem("users")) ;
        let isSigned = false;
        for(let user of getUsers) {
            if(user.username === inputUserName.value && user.password === inputPassword.value) {
                isSigned = true;
            } else {
                isSigned = false;
            }
        }
        if(isSigned) {
            // remove the classe show and error
            showNotification.classList.remove("show", "error");
            // put the new classes after 100ms 
            setTimeout(() => {
                showNotification.classList += " show successe";
                notificationMessage.textContent = "login success";
                // and after 2000ms redirecte to home page 
                setTimeout(() => {
                    location.href = "index.html";
                },  2000 );
            }, 100);
        } else {
            // remove the classes show and successe
            showNotification.classList.remove("show", "successe");
            // put the new classes after 1000ms
            setTimeout(() => {
                showNotification.classList += " show error";
                notificationMessage.textContent = "username or password is incorrect";
                // remove classe show first after 1000ms
                setTimeout(() => {
                        showNotification.classList.remove("show");
                        // and remove seconde class error after 1000ms 
                    setTimeout(() => {
                        showNotification.classList.remove("error");
                    }, 1000);
                }, 1000);
            }, 1000);
        }
    }



}