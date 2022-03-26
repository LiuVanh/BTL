function checkCity(){
    let City = document.getElementById('txtCity');
    let CityRegex = /^[a-zA-Z]+$/;
    if(CityRegex.test(City.value)){
        return true
    }
    return false
}

function checkDistrict(){
    let District = document.getElementById('txtDistrict');
    let DistrictRegex = /^[a-zA-Z]+$/;
    if(DistrictRegex.test(District.value)){
        return true
    }
    return false
}

function checkWards(){
    let Wards = document.getElementById('txtWards');
    let WardsRegex = /^[a-zA-Z]+$/;
    if(WardsRegex.test(Wards.value)){
        return true
    }
    return false
}

function checkName(){
    let Name = document.getElementById('txtName');
    let NameRegex = /^[a-zA-Z]+$/;
    if(NameRegex.test(Name.value)){
        return true
    }
    return false
}

function checkIdentification(){
    let Identification = document.getElementById('txtIdentification');
    let IdentificationRegex = /^[0-9]{12}$/;
    if(IdentificationRegex.test(Identification.value)){
        return true
    }
    return false
}

function checkDate(){
    let Dates = document.getElementById('txtDate');
    let DatesRegex = /^([0-2][0-9]|(3)[0-1])(-|\/)(((0)[0-9])|((1)[0-2]))(-|\/)\d{4}$/;
    if(DatesRegex.test(Dates.value)){
        return true
    }
    return false
}

function checkGender(){
    let Gender = document.getElementById('Gender').value;
    let isTrue = true;
        if(Gender=="selectGender")
            isTrue = false
    return isTrue
    }

function checkInsurance(){
    let Insurance = document.getElementById('txtInsurance');
    let InsuranceRegex = /^[0-9]{10}$/;
    if(InsuranceRegex.test(Insurance.value)){
        return true
    }
    return false
}

function checkInjection(){
    let Injection = document.getElementById('Injection').value;
    let isTrue = true;
        if(Injection=="selectInjection")
            isTrue = false
        return isTrue
    }

function checkContactAddress(){
    let ContactAddress = document.getElementById('txtContactAddress');
    let ContactAddressRegex = /^[a-zA-Z]+$/;
    if(ContactAddressRegex.test(ContactAddress.value)){
        return true
    }
    return false
}

function checkPhoneNumber(){
    let PhoneNumber = document.getElementById('txtPhoneNumber');
    let PhoneNumberRegex = /^[0-9]{9,11}$/;
    if(PhoneNumberRegex.test(PhoneNumber.value)){
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

let cancel = document.getElementById('btnCancel')
cancel.addEventListener('click', function(f){
    f.preventDefault()
    location.replace("index.html")
})
let register = document.getElementById('btnRegister')
register.addEventListener('click', function(e){
    e.preventDefault()
    let statusOfCity = document.getElementById('statusOfCity')
    let statusOfDistrict = document.getElementById('statusOfDistrict')
    let statusOfWards = document.getElementById('statusOfWards')
    let statusOfName = document.getElementById('statusOfName')
    let statusOfIdentification = document.getElementById('statusOfIdentification')
    let statusOfDate = document.getElementById('statusOfDate')
    let statusOfGender = document.getElementById('statusOfGender')
    let statusOfInsurance = document.getElementById('statusOfInsurance')
    let statusOfInjection = document.getElementById('statusOfInjection')
    let statusOfContactAddress = document.getElementById('statusOfContactAddress')
    let statusOfPhoneNumber = document.getElementById('statusOfPhoneNumber')
    let statusOfEmail = document.getElementById('statusOfEmail')
    if(checkCity() == true && checkDistrict() == true && checkWards() == true && checkName() == true && checkIdentification() == true && checkDate() == true && checkGender() == true && checkInsurance() == true && checkInjection() == true && checkContactAddress() == true && checkPhoneNumber() == true && checkEmail() == true) {
        location.replace("https://www.w3schools.com")
    }
    if(checkCity() == false){
        statusOfCity.textContent = 'Invalid city. Please re-enter'
        statusOfCity.style.color = 'red'
    }
    if(checkDistrict() == false){
        statusOfDistrict.textContent = 'Invalid district. Please re-enter'
        statusOfDistrict.style.color = 'red'
    }
    if(checkWards() == false){
        statusOfWards.textContent = 'Invalid wards. Please re-enter'
        statusOfWards.style.color = 'red'
    }
    if(checkName() == false){
        statusOfName.textContent = 'Invalid name. Please re-enter'
        statusOfName.style.color = 'red'
    }
    if(checkIdentification() == false){
        statusOfIdentification.textContent = 'Invalid identification. Please re-enter'
        statusOfIdentification.style.color = 'red'
    }
    if(checkDate() == false){
        statusOfDate.textContent = 'Invalid date of birth. Please re-enter'
        statusOfDate.style.color = 'red'
    }
    if(checkGender() == false){
        statusOfGender.textContent = 'Please choose your gender'
        statusOfGender.style.color = 'red'
    }
    if(checkInsurance() == false){
        statusOfInsurance.textContent = 'Invalid insurance. Please re-enter'
        statusOfInsurance.style.color = 'red'
    }
    if(checkInjection() == false){
        statusOfInjection.textContent = 'Please choose your injection'
        statusOfInjection.style.color = 'red'
    }
    if(checkContactAddress() == false){
        statusOfContactAddress.textContent = 'Invalid address. Please re-enter'
        statusOfContactAddress.style.color = 'red'
    }
    if(checkPhoneNumber() == false){
        statusOfPhoneNumber.textContent = 'Invalid phone number. Please re-enter'
        statusOfPhoneNumber.style.color = 'red'
    }
    if(checkEmail() == false){
        statusOfEmail.textContent = 'Invalid email. Please re-enter'
        statusOfEmail.style.color = 'red'
    }
})