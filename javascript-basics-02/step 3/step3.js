function onChange(){
    let div=document.querySelector("div");
    let input=document.querySelector("#name");

    div.innerHTML = input.value;
}