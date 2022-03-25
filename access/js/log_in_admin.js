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
        statusOfUserName.textContent = 'UserName không hợp lệ. Mời nhập lại'
        statusOfUserName.style.color = 'red' 
    }
    if(checkPassword() == false){
        statusOfPassword.textContent = 'Password không hợp lệ. Mời nhập lại'
        statusOfPassword.style.color = 'red'
        statusOfPassword.style.marginTop = '100px'
    }
    if(checkUserName()==true && checkPassword()==true){
        location.replace("https://sinhvien.tlu.edu.vn/#/login")
    }
})