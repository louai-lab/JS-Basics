document.querySelector("button").addEventListener("click", displayDate);
    
    function displayDate() {
        let inputs=document.querySelectorAll("input");

        let text="do you want to reset?!"

        if(confirm(text)){
            (inputs.forEach((input)=>{
                input.value="";
            }))
        }
        else{
            alert("thanks");
        }
        
    }