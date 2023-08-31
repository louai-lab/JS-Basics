// function mouseOver(){
//     let img=document.querySelector("#image1");
//     img.style.border="3px solid red"
// }


let img=document.querySelector("#image1");

console.log(img);

img.addEventListener("mouseover",()=>{
    img.style.border="3px solid red";
})