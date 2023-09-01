// let name = prompt("Please enter your name:");
// let surname = prompt("Please enter your surname:");
// let city = prompt("Please enter your city:");


// function ask(){
//     let name=document.forms["form"]["name"].value;
//     let surname=document.forms["form"]["surname"].value;
//     let city=document.forms["form"]["city"].value;

//     alert("Name : " + name + "\nsurname : " + surname +"\ncity : " +city )
// }


let btn=document.querySelector("#validate");

let name=document.querySelector("#name");

let city=document.querySelector("#surname");

btn.addEventListener("click",()=>{
    alert("hi,i am " + name.value +" "+ surname.value + " from "+city.value)
})