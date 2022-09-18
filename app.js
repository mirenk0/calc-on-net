//We get all the buttons
//We listen for an click event to happen to any of them to get their value 
//Then we display the value in our display 
//If we've clicked a specific operator activate the operate function to it when = is clicked
//Results are returned as the first operand now
//Need to add the new operator and the second operand
//Keep repeating

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

let firstOperand = 0;
let operatorStored = "";
let secondOperand = 0;
let result = 0;


//Pressing keyboard keys
window.addEventListener("keydown", (e) => {
    if(e.key >= 48 && e.key <= 57){
        display.innerHTML = e;
    }
});


const operatorAction = operators.forEach(operator => {
    operator.addEventListener("click", () => {
        display.textContent = "";
        operatorStored = operator.textContent;
        return operatorStored;
    })
});

operatorStored = operatorAction;


const operandsAction = operands.forEach(operand => {
    operand.addEventListener("click", () => {
        firstOperand = operand.textContent;
        return firstOperand;
    })
});

firstOperand = operandsAction;


const secondOperandAction = operands.forEach(operand => {
    operand.addEventListener("click", ()=>{
        secondOperand = display.textContent;
        return secondOperand;
    })
})

secondOperand = secondOperandAction;


const results = equalBtn.addEventListener("click", () => {
    result = operate(operatorStored, firstOperand, secondOperand);
    display.textContent = result;
    return result;
});


//Display with onclick
function displayChange(ele){
    display.textContent += ele.textContent;
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
        case "x":
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



