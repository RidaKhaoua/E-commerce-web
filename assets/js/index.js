import { verifIsLogged , createDataOnLocalStorage} from "./script.js";

// get link sign in
const linkSignIn = document.querySelector(".header .login");


// get link profile
const linkProfile = document.querySelector(".header .profile");


createDataOnLocalStorage();

verifIsLogged(linkSignIn, linkProfile);