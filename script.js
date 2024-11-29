const registerB = document.getElementById('registerB')
const loginB = document.getElementById('loginB')
const container= document.getElementsByClassName('container')
const loginContainer = document.getElementsByClassName('login-container')

function clickLogin() {
    loginContainer.style.left = "550px"
    container.style.right = "-300px"
}

function clickRegister() {
    loginContainer.style.left = "-290px"
    container.style.right = "560px"
}