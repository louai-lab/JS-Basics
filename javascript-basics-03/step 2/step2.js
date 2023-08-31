

// function show(){
    
// function changeStyle(display){
    
//     let texte=document.querySelector("#texte");

//     texte.style.display=display;
// }

let btn=document.querySelectorAll("a");
let texte=document.querySelector("#texte");

btn.forEach(element =>{
    element.addEventListener("click",(e)=>{
        if(e.target.id ==="hide"){
            texte.style.display="none";
        }

        else if(element){
            texte.style.display="block";
        }
    })
})


