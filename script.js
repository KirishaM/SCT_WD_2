const display = document.getElementById("display");
const historyDisplay = document.getElementById("historyDisplay");
const historyList = document.getElementById("historyList");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){

    try{

        const expression = display.value;

        const result = eval(expression);

        historyDisplay.textContent =
            expression + " =";

        display.value = result;

        const listItem =
            document.createElement("li");

        listItem.textContent =
            expression + " = " + result;

        historyList.prepend(listItem);
    }

    catch{

        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){

    const key = event.key;

    if("0123456789+-*/.%".includes(key)){
        appendValue(key);
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        deleteLast();
    }

    else if(key === "Escape"){
        clearDisplay();
    }
});