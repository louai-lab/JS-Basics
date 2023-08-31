// function onChange(){
//     let div=document.querySelector("div");
//     let input=document.querySelector("#name");

//     div.innerHTML = input.value;
// }

// let div=document.querySelector("#divv")

let para=document.createElement("div");
let input=document.querySelector("#name");

document.body.appendChild(para);
para.style.width="250px";
para.style.height="250px";

input.addEventListener("keyup",()=>{
    para.innerHTML = input.value;
})