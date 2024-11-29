const registerB = document.getElementById('registerB')
const loginB = document.getElementById('loginB')
const container= document.getElementsByClassName('container')
const loginContainer = document.getElementsByClassName('login-container')

loginB.addEventListener("click" , function clickLogin() {
    loginContainer.style.display = "block"
    container.style.display = "none"
});

registerB.addEventListener("click" , function clickRegister() {
    loginContainer.style.display = "none"
    container.style.display = "block"
});