function checkFirstname(){
    let Firstname = document.getElementById('txtFirstname');
    let FirstnameRegex = /^[a-zA-Z]+$/;
    if(FirstnameRegex.test(Firstname.value)){
        return true
    }
    return false
}

function checkLastname(){
    let Lastname = document.getElementById('txtLastname');
    let LastnameRegex = /^[a-zA-Z]+$/;
    if(LastnameRegex.test(Lastname.value)){
        return true
    }
    return false
}

function checkEmail(){
    let Email = document.getElementById('txtEmail');
    let EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(EmailRegex.test(Email.value)){
        return true
    }
    return false
}

function checkSubject(){
    let Subject = document.getElementById('txtSubject');
    let SubjectRegex = /^[a-zA-Z]+$/;
    if(SubjectRegex.test(Subject.value)){
        return true
    }
    return false
}

let register = document.getElementById('btnRegister')

register.addEventListener('click', function(e){
    e.preventDefault()
    let statusFirstname = document.getElementById('statusOfFirstname')
    let statusLastname = document.getElementById('statusOfLastname')
    let statusEmail = document.getElementById('statusOfEmail')
    let statusSubject = document.getElementById('statusOfSubject')
    if(checkFirstname() == false){
        statusFirstname.textContent = 'First name không hợp lệ. Mời nhập lại'
        statusFirstname.style.color = 'red'
    }
    if(checkLastname() == false){
        statusLastname.textContent = 'Last name không hợp lệ. Mời nhập lại'
        statusLastname.style.color = 'red'
    }
    if(checkEmail() == false){
        statusEmail.textContent = 'Email không hợp lệ. Mời nhập lại'
        statusEmail.style.color = 'red'
    }
    if(checkSubject() == false){
        statusSubject.textContent = 'Subject không hợp lệ. Mời nhập lại'
        statusSubject.style.color = 'red'
    }
    if(checkFirstname() == true && checkLastname() == true && checkEmail() == true && checkSubject() == true){
        location.href = 'contact.html'
    }
})