const clearContent = document.querySelector(".clear");
const deleteContent = document.querySelector(".delete");

const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const pointBtn = document.querySelector("#point-btn");
const equalBtn = document.querySelector("#equal-btn");
const display = document.querySelector(".display");
display.innerHTML = null;

const operands = Array.from(numberBtn);
const operators = Array.from(operatorBtn);

//We get all the buttons
//We listen for an click event to happen to any of them to get their value 
//Then we display the value in our display 
//If we've clicked a specific operator activate the operate function to it when = is clicked
//Results are returned as the first operand now
//Need to add the new operator and the second operand


//Pressing keyboard keys
window.addEventListener("keydown", (e) => {
    if(e.key >= 48 && e.key <= 57){
        display.innerHTML = e;
    }
});


const operatorAction = operators.forEach(operator => {
    operator.addEventListener("click", () => {
        return operator.innerHTML;
    })
});

const operandsAction = operands.forEach(operand => {
    operand.addEventListener("click", () => {
        return operand.innerHTML;
    })
});


const results = equalBtn.addEventListener("click", () => {
    return operate(operatorAction, operandsAction, operandsAction);
});


//Display with onclick
function displayChange(ele){
    display.innerHTML += ele.innerHTML;
}


//operate

function operate(operator, fnum, snum) {
    switch(operator) {
        case "+":
            add(fnum, snum);
            break;
        case "-":
            subtract(fnum, snum);
            break;
        case "/":
            division(fnum, snum);
            break;
        case "*":
            mul(fnum, snum);
            break;
        default:
            break;
            
    }
}


//Functions


function clear() {
    display.innerHTML = null;
}

function deletion() {

}

function add(fnum, snum){
    return fnum + snum;
}

function subtract(fnum, snum){
    return fnum - snum;
}

function division(fnum, snum){
    return fnum / snum;
}

function mul(fnum, snum) {
    return fnum * snum;
}



