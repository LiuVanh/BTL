const formLogin = document.querySelectorAll('.form-text input')
            const formLabel = document.querySelectorAll('.form-text label')
            for(let i=0;i<2;i++){
                formLogin[i].addEventListener('mouseover',function(){
                    formLabel[i].classList.add('focus')
                })
                formLogin[i].addEventListener('mouseout',function(){
                    if(formLogin[i].value==""){
                        formLabel[i].classList.remove('focus')}
                })
            }
function checkUserName(){
    let UserName = document.getElementById('txtUserName');
    let UserNameRegex = /^[a-zA-Z]+$/;
    if(UserNameRegex.test(UserName.value)){
        return true
    }
    return false
}

function checkPassword(){
    let password = document.getElementById('txtPassword');
    let passwordRegex = /^[0-9]+$/;
    if(passwordRegex.test(password.value)){
        return true
    }
    return false
}
let register = document.getElementById('btnRegister')
register.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfUserName = document.getElementById('statusOfUserName')
    let statusOfPassword = document.getElementById('statusOfPassword')
    if(checkUserName() == false){
        statusOfUserName.textContent = 'Username is not valid. Please re-enter'
        statusOfUserName.style.color = 'red' 
        document.getElementById("form-login_info").style.bottom = '35px'
        document.getElementById("form-login_info_pw").style.bottom = '35px'
    }
    if(checkPassword() == false){
        statusOfPassword.textContent = 'Password is not valid. Please re-enter'
        statusOfPassword.style.color = 'red'
        document.getElementById("form-login_info").style.bottom = '35px'
        document.getElementById("form-login_info_pw").style.bottom = '35px'
    }
    if(checkUserName()==true && checkPassword()==true){
        location.href="admin/index.html"
    }
})