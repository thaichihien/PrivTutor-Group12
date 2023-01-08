const userInfor = document.getElementById('username')
const loginBtn = document.getElementById('login')
const registerBtn = document.getElementById('register')
const logoutBtn = document.getElementById('logout')


const getInfor = () => {
    const name = userInfor.innerHTML
    if(name){
        loginBtn.style.display = 'none'
        registerBtn.style.display = 'none'
        logoutBtn.innerHTML = 'Logout'
    }
}

getInfor()