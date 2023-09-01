// function ask(){
//     let size=document.getElementById("shoe_size").value;
//     let year=document.getElementById("year").value;

//     size=size*2;
//     let add=size+5;
//     add=add*50;
//     let sub=add-year;
//     sub=sub+1766;

//     alert(sub);
// }


let size=document.getElementById("shoe_size").value;
let year=document.getElementById("year").value;
let btn=document.querySelector("#validate");


btn.addEventListener("click",()=>{
    size=size*2;
    let add=size+5;
    add=add*50;
    let sub=add-year;
    sub=sub+1766;

    alert(sub);
})

