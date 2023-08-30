function mouseOver(imageNumber) {
    document.querySelector(`#image${imageNumber}`).src=`images/image${imageNumber}_2.jpg`;
}

function mouseOut(imageNumber) {
    document.querySelector(`#image${imageNumber}`).src = `images/image${imageNumber}.jpg`;
}