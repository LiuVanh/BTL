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
function checNew(){
    let New = document.getElementById('txtNew');
    let NewRegex = /^[a-zA-Z]+$/;
    if(NewRegex.test(New.value)){
        return true
    }
    return false
}

function checkConfirmation(){
    let New = document.getElementById('txtNew');
    let Confirmation = document.getElementById('txtConfirmation');
    if(Confirmation.value == New.value){
        return true;
    }
    return false;
}
let register = document.getElementById('btnRegister')
register.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfNew = document.getElementById('statusOfNew')
    let statusOfConfirmation = document.getElementById('statusOfConfirmation')
    if(checNew() == false){
        statusOfNew.textContent = 'Password is not valid. Please re-enter'
        statusOfNew.style.color = 'red' 
        document.getElementById("form-login_info").style.bottom = '35px'
        document.getElementById("form-login_info_pw").style.bottom = '35px'
    }
    if(checkConfirmation() == false){
        statusOfConfirmation.textContent = 'Password is not valid. Please re-enter'
        statusOfConfirmation.style.color = 'red'
        document.getElementById("form-login_info").style.bottom = '35px'
        document.getElementById("form-login_info_pw").style.bottom = '35px'
    }
    if(checNew()==true && checkConfirmation()==true){
        location.href="log_in_admin.html"
    }
})