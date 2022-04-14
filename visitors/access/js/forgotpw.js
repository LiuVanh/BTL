const formLogin = document.querySelectorAll('.form-text input')
            const formLabel = document.querySelectorAll('.form-text label')
            for(let i=0;i<1;i++){
                formLogin[i].addEventListener('mouseover',function(){
                    formLabel[i].classList.add('focus')
                })
                formLogin[i].addEventListener('mouseout',function(){
                    if(formLogin[i].value==""){
                        formLabel[i].classList.remove('focus')}
                })
            }
function checkEmail(){
    let Email = document.getElementById('txtEmail');
    let EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(EmailRegex.test(Email.value)){
        return true
    }
    return false
}
let register = document.getElementById('btnRegister')
register.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfEmail = document.getElementById('statusOfEmail')
    if(checkEmail() == false){
        statusOfEmail.textContent = 'Username or Email is not valid. Please re-enter'
        statusOfEmail.style.color = 'red' 
        document.getElementById("form-login_info").style.bottom = '35px'
        document.getElementById("form-login_info_pw").style.bottom = '35px'
    }
    if(checkEmail()==true){
        location.href="newpw.html"
    }
})