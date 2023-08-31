

// function changeColor(color) {

//     let paragraphe=document.getElementById("text");
    
//     paragraphe.style.color=color;
    
//     }


let colors=document.querySelectorAll(".color");
let text=document.querySelector("#text")

console.log(colors);
console.log(text);

colors.forEach(element =>{
    element.addEventListener("click",(e)=>{
        if(e.target.classList[1] ==="green"){
            text.style.color="green";
        }

        else if(e.target.classList[1] ==="red"){
            text.style.color="red";
        }
        else if(e.target.classList[1] ==="blue"){
            text.style.color="blue"
        }
    })
})