// let name = prompt("Please enter your name:");
// let surname = prompt("Please enter your surname:");
// let city = prompt("Please enter your city:");


function ask(){
    let name=document.forms["form"]["name"].value;
    let surname=document.forms["form"]["surname"].value;
    let city=document.forms["form"]["city"].value;

    alert("Name : " + name + "\nsurname : " + surname +"\ncity : " +city )
}