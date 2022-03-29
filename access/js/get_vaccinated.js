// JS for step
const stepButtons = document.querySelectorAll('.step-button');
const progress = document.querySelector('#progress');

Array.from(stepButtons).forEach((button,index) => {
    button.addEventListener('click', () => {
        progress.setAttribute('value', index * 100 /(stepButtons.length - 1) );//there are 3 buttons. 2 spaces.

        stepButtons.forEach((item, secindex)=>{
            if(index > secindex){
                item.classList.add('done');
            }
            if(index < secindex){
                item.classList.remove('done');
            }
        })
    })
})

// JS for step1
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
let register1 = document.getElementById('btnRegister')
register1.addEventListener('click', function(e){
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
        $("#accordionExample > div.steps > div:nth-child(3) > button").click();
        
    }
    if(checkCity() == false){
        statusOfCity.textContent = 'Invalid city.'
        statusOfCity.style.color = 'red'
    }
    if(checkDistrict() == false){
        statusOfDistrict.textContent = 'Invalid district.'
        statusOfDistrict.style.color = 'red'
    }
    if(checkWards() == false){
        statusOfWards.textContent = 'Invalid wards.'
        statusOfWards.style.color = 'red'
    }
    if(checkName() == false){
        statusOfName.textContent = 'Invalid name.'
        statusOfName.style.color = 'red'
    }
    if(checkIdentification() == false){
        statusOfIdentification.textContent = 'Invalid identification.'
        statusOfIdentification.style.color = 'red'
    }
    if(checkDate() == false){
        statusOfDate.textContent = 'Invalid date of birth.'
        statusOfDate.style.color = 'red'
    }
    if(checkGender() == false){
        statusOfGender.textContent = 'Please choose your gender'
        statusOfGender.style.color = 'red'
    }
    if(checkInsurance() == false){
        statusOfInsurance.textContent = 'Invalid insurance.'
        statusOfInsurance.style.color = 'red'
    }
    if(checkInjection() == false){
        statusOfInjection.textContent = 'Please choose your injection'
        statusOfInjection.style.color = 'red'
    }
    if(checkContactAddress() == false){
        statusOfContactAddress.textContent = 'Invalid address.'
        statusOfContactAddress.style.color = 'red'
    }
    if(checkPhoneNumber() == false){
        statusOfPhoneNumber.textContent = 'Invalid phone number.'
        statusOfPhoneNumber.style.color = 'red'
    }
    if(checkEmail() == false){
        statusOfEmail.textContent = 'Invalid email.'
        statusOfEmail.style.color = 'red'
    }
})

// JS for step2
function checkVaccineIntakeConsent1(){
    x=0;
    var yes1=document.getElementById('Yes1')
    var no1=document.getElementById('No1')
    if(yes1.checked){
        x++;
    }
    if(no1.checked){
        x++;
    }
    if(x==0){return false}
    }

function checkVaccineIntakeConsent2(){
    x=0;
    var yes2=document.getElementById('Yes2')
    var no2=document.getElementById('No2')
    if(yes2.checked){
        x++;
    }
    if(no2.checked){
        x++;
    }
    if(x==0){return false}
    }
function checkVaccineIntakeConsent3(){
    x=0;
    var yes3=document.getElementById('Yes3')
    var no3=document.getElementById('No3')
    if(yes3.checked){
        x++;
    }
    if(no3.checked){
        x++;
    }
    if(x==0){return false}
    }
function checkVaccineIntakeConsent4(){
    x=0;
    var yes4=document.getElementById('Yes4')
    var no4=document.getElementById('No4')
    if(yes4.checked){
        x++;
    }
    if(no4.checked){
        x++;
    }
    if(x==0){return false}
    }
function checkVaccineIntakeConsent5(){
    x=0;
    var yes5=document.getElementById('Yes5')
    var no5=document.getElementById('No5')
    if(yes5.checked){
        x++;
    }
    if(no5.checked){
        x++;
    }
    if(x==0){return false}
    }
function checkVaccineIntakeConsent6(){
    x=0;
    var yes6=document.getElementById('Yes6')
    var no6=document.getElementById('No6')
    if(yes6.checked){
        x++;
    }
    if(no6.checked){
        x++;
    }
    if(x==0){return false}
    }
function checkVaccineIntakeConsent7(){
    x=0;
    var yes7=document.getElementById('Yes7')
    var no7=document.getElementById('No7')
    if(yes7.checked){
        x++;
    }
    if(no7.checked){
        x++;
    }
    if(x==0){return false}
    }
    let cancel2 = document.getElementById('btnCancel2')
    cancel2.addEventListener('click', function(f){
    f.preventDefault()
    location.replace("index.html")
})
    let register2 = document.getElementById('btnRegister2')
    register2.addEventListener('click', function(e){
        e.preventDefault()
        if(checkVaccineIntakeConsent1() == undefined && checkVaccineIntakeConsent2() == undefined && checkVaccineIntakeConsent3() == undefined && checkVaccineIntakeConsent4() == undefined && checkVaccineIntakeConsent5() == undefined && checkVaccineIntakeConsent6() == undefined && checkVaccineIntakeConsent7() == undefined) {
            $('#accordionExample > div.steps > div:nth-child(4) > button').click()
        }
        let statusOf1 = document.getElementById('statusOf1')
        if(checkVaccineIntakeConsent1() == false){
            statusOf1.textContent = 'You must choose yes or no.'
            statusOf1.style.color = 'red'
        }
        let statusOf2 = document.getElementById('statusOf2')
        if(checkVaccineIntakeConsent2() == false){
            statusOf2.textContent = 'You must choose yes or no.'
            statusOf2.style.color = 'red'
        }
        let statusOf3 = document.getElementById('statusOf3')
        if(checkVaccineIntakeConsent3() == false){
            statusOf3.textContent = 'You must choose yes or no.'
            statusOf3.style.color = 'red'
        }
        let statusOf4 = document.getElementById('statusOf4')
        if(checkVaccineIntakeConsent4() == false){
            statusOf4.textContent = 'You must choose yes or no.'
            statusOf4.style.color = 'red'
        }
        let statusOf5 = document.getElementById('statusOf5')
        if(checkVaccineIntakeConsent5() == false){
            statusOf5.textContent = 'You must choose yes or no.'
            statusOf5.style.color = 'red'
        }
        let statusOf6 = document.getElementById('statusOf6')
        if(checkVaccineIntakeConsent6() == false){
            statusOf6.textContent = 'You must choose yes or no.'
            statusOf6.style.color = 'red'
        }
        let statusOf7 = document.getElementById('statusOf7')
        if(checkVaccineIntakeConsent7() == false){
            statusOf7.textContent = 'You must choose yes or no.'
            statusOf7.style.color = 'red'
        }
    })
let register3 = document.getElementById('btnRegister3')
    register3.addEventListener('click', function(e){
        e.preventDefault()
        location.replace("index.html")
    })