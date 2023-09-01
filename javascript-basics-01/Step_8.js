// function ask(){
//     let age=document.getElementById("age").value;

//     if(age > 18){
//         alert("you are over 18");
//     }
//     else{
//         alert("you are under 18");
//     }
// }

let age=document.getElementById("age").value;
let btn=document.querySelector("#validate");

btn.addEventListener("click",()=>{
    if(age > 18){
        alert("you are over 18");
    }
    else{
        alert("you are under 18");
    }
})

