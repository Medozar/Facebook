const loginButton=document.getElementById("login-button")

loginButton.addEventListener("click",function(){
const userName=document.getElementById("username").value
const password=document.getElementById("password").value

const inputsObject = {
    username: userName,
    password: password
};

let existingEntries = JSON.parse(localStorage.getItem('inputsData'));

if (existingEntries === null) existingEntries = [];

existingEntries.push(inputsObject);

const jsonString = JSON.stringify(existingEntries);

localStorage.setItem('inputsData', jsonString);
});