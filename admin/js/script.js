// JS for check input
let Number = document.getElementById('Number');
let statusOfNumber = document.getElementById('statusOfNumber')
function checkNumber(){
    let NumberRegex = /^[0-9]$/;
    if(NumberRegex.test(Number.value)){
        return true
    }
    return false
}
Number.addEventListener('focusout', leaveNumber)
function leaveNumber(){
    if(checkNumber() == false){
        statusOfNumber.style.display = 'flex'
        statusOfNumber.textContent = 'Invalid number.'
        statusOfNumber.style.color = 'red'
    }
}

let Name = document.getElementById('Name');
let statusOfName = document.getElementById('statusOfName')
function checkName(){
    let NameRegex = /^[a-zA-Z]+$/;
    if(NameRegex.test(Name.value)){
        return true
    }
    return false
}
Name.addEventListener('focusout', leaveName)
function leaveName(){
    if(checkName() == false){
        statusOfName.style.display = 'flex'
        statusOfName.textContent = 'Invalid name.'
        statusOfName.style.color = 'red'
    }
}

let Email = document.getElementById('Email');
let statusOfEmail = document.getElementById('statusOfEmail')
function checkEmail(){
    let EmailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(EmailRegex.test(Email.value)){
        return true
    }
    return false
}
Email.addEventListener('focusout', leaveEmail)
function leaveEmail(){
    if(checkEmail() == false){
        statusOfEmail.style.display = 'flex'
        statusOfEmail.textContent = 'Invalid email.'
        statusOfEmail.style.color = 'red'
    }
}

let Injections = document.getElementById('Injections');
let statusOfInjections = document.getElementById('statusOfInjections')
function checkInjections(){
    let Injections = document.getElementById('Injections');
    let InjectionsRegex = /^[0-9]$/;
    if(InjectionsRegex.test(Injections.value)){
        return true
    }
    return false
}

Injections.addEventListener('focusout', leaveInjections)
function leaveInjections(){
    if(checkInjections() == false){
        statusOfInjections.style.display = 'flex'
        statusOfInjections.textContent = 'Invalid injections.'
        statusOfInjections.style.color = 'red'
    }
}

// JS for button
function addItem(){
    var tbody = document.getElementById("data");
    var newRow = tbody.insertRow(tbody.lenght);
    var Number = document.getElementById("Number").value;
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var Injections = document.getElementById("Injections").value;

    cell1 = newRow.insertCell(0);
    cell2 = newRow.insertCell(1);
    cell3 = newRow.insertCell(2);
    cell4 = newRow.insertCell(3);
    cell5 = newRow.insertCell(4);

    cell1.innerHTML = Number;
    cell2.innerHTML = Name;
    cell3.innerHTML = Email;
    cell4.innerHTML = Injections;
    cell5.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;
}
function removeAllItem(){
    tbody = document.getElementById("data");
    tbody.innerHTML = null;
    for (i = 0; i < tbody.length; i++){
        cell1 = newRow.insertCell(0);
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);

        cell1.innerHTML = Number;
        cell2.innerHTML = Name;
        cell3.innerHTML = Email;
        cell4.innerHTML = Injections;
        cell5.innerHTML = `<span onclick="delete_user(this)"><i class="fas fa-trash"></i><span>`;
    }
}
function delete_user(obj){
    row = obj.parentElement.parentElement;
    id = row.firstElementChild.innerHTML;
    localStorage.removeItem(id);
    row.remove();
}