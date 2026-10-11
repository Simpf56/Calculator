const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event)=>{
    if(event.key==="Enter"){
        event.preventDefault();
        calculate();
    }
});

document.addEventListener("keydown", (event)=>{
    if(event.key==="C"){
        event.preventDefault();
        clearDisplay();
    } else if (event.key.toLowerCase() === "c") {
        clearDisplay();
    }
});