
const showNotification = document.querySelector(".notification");

const notificationMessage = document.querySelector(".notification .notification-message");
console.log(notificationMessage);

function createDataOnLocalStorage() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]));
    }
}

function verifIsLogged(linkSignIn, LinkProfile) {
    if (localStorage.getItem("logged")) {
        linkSignIn.classList += " active";
        LinkProfile.classList.remove("hidden");
    }
}

function showError(input, message = "", nameClass = "") {
    const small = document.querySelector(`[data-${input.id}]`);
    small.classList = nameClass;
    small.textContent = message;
}

function clearSmall() {
    const allSmall = [
    ...document.querySelectorAll(".section-form .form-sign small"),
    ];
    allSmall.forEach((small) => {
        small.classList = "";
        small.textContent = "";
    });
}

function checkAnyInputIsEmpty() {
    const allInnputs = document.querySelectorAll(
    ".section-form .content-input input"
    );
    allInnputs.forEach((input) => {
        if (input.value.length === 0) {
            showError(input, "the field can not be empty", "error");
        } else {
            showError(input);
        }
    });
}



export {createDataOnLocalStorage, showError, clearSmall, verifIsLogged, checkAnyInputIsEmpty , showNotification, notificationMessage};
