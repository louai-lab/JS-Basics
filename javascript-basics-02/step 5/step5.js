

// function mouseOver(imageNumber) {
//     document.querySelector(`#image${imageNumber}`).src=`images/image${imageNumber}_2.jpg`;
// }

let images=document.querySelectorAll("img");

images.forEach(element => {
    element.addEventListener("mouseover",()=>{
        element.src=`images/${element.id}_2.jpg`;
    })
});