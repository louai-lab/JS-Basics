

// function mouseOver1(){
//     document.querySelector("#image1").src="images/image1_2.jpg"
// }


// function mouseOver2(){
//     document.querySelector("#image2").src="images/image2_2.jpg"
// }

// function mouseOver3(){
//     document.querySelector("#image3").src="images/image3_2.jpg"
// }

// function mouseOver4(){
//     document.querySelector("#image4").src="images/image4_2.jpg"
// }
// function mouseOver5(){
//     document.querySelector("#image5").src="images/image5_2.jpg"
// }

function mouseOver(imageNumber) {
    document.querySelector(`#image${imageNumber}`).src=`images/image${imageNumber}_2.jpg`;
}
// mouseOver(1);  // This will change image1's source
// mouseOver(2);  // This will change image2's source
// mouseOver(3);  // This will change image3's source
// mouseOver(4);  // This will change image4's source
// mouseOver(5);  // This will change image5's source
