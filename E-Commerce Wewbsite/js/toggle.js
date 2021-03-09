var MenuItems =document.getElementById("menu-items")
MenuItems.style.maxHeight = "0px";
function menuToggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "300px";
    }
    else
    {
        MenuItems.style.maxHeight = "0px";
    }
}



/*==========Js For toggle form===*/
var LoginForm = document.getElementById("LoginForm");
var Regform = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
function register() {
    Regform.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(115px)";
}
function login()
{
    Regform.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}