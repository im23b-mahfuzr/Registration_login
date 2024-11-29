const registerB = document.getElementById('registerB')
const loginB = document.getElementById('loginB')
const login = document.getElementById('login')
const register = document.getElementById('register')
const container= document.getElementById('container')
const loginContainer = document.getElementById('login-container')


registerB.addEventListener('click', function clickRegister(){
        container.style.left = "250px"
        loginContainer.style.right = "-650px"
        container.style.transition = "2s ease-in-out"
        loginContainer.style.transition = "2s ease-in-out"
});

register.addEventListener('click', function clickRegister(){
    container.style.left = "250px"
    loginContainer.style.right = "-650px"
    container.style.transition = "2s ease-in-out"
    loginContainer.style.transition = "2s ease-in-out"
});

loginB.addEventListener('click', function clickLogin() {
    loginContainer.style.right = "250px"
    container.style.left = "-650px"
    container.style.transition = "2s ease-in-out"
    loginContainer.style.transition = "2s ease-in-out"
});

login.addEventListener('click', function clickLogin() {
    loginContainer.style.right = "250px"
    container.style.left = "-650px"
    container.style.transition = "2s ease-in-out"
    loginContainer.style.transition = "2s ease-in-out"
});