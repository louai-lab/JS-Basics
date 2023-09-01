// function ask(){
//     let num1=document.getElementById("first_number").value;
//     let num2=document.getElementById("second_number").value;

//     let div=num1%num2;

//     alert(div);
// }


let num1=document.querySelector("#first_number");
let num2=document.querySelector("#second_number");
let btn=document.querySelector("#validate");




btn.addEventListener("click",()=>{
    let mult=num1.value%num2.value;
    alert(mult);
})