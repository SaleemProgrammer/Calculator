let buttons = document.querySelectorAll("button");
let result = document.querySelector("#res");


const ACbtn = () => {
    result.value = "";
}



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(button.innerText === "=") {
            res.value = eval(res.value);
        }else {
            res.value += button.innerText;
        }  

        if(button.innerText === "AC") {
            ACbtn();
        }else if(button.innerText === "DEL") {
            ACbtn();
        }
    })
})