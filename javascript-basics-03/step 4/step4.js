document.querySelector("button").addEventListener("click", changeStyle);

function changeStyle(){
    let password=document.getElementById("password");
    let confirmation=document.getElementById("confirmation");

    if(password.value != confirmation.value){
        password.style.border="20px solid red";
        confirmation.style.border="20px solid red";
    }
}