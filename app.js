const clearContent = document.querySelector(".clear");
const deleteContent = document.querySelector(".delete");

const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const pointBtn = document.querySelector("#point-btn");
const equalBtn = document.querySelector("#equal-btn");
const display = document.querySelector(".display");
const subDisplay = document.querySelector(".sub-display");
display.innerHTML = null;

const operands = Array.from(numberBtn);
const operators = Array.from(operatorBtn);

let firstOperand = 0;
let operatorStored = "";
let secondOperand = 0;
let result = 0;     


//Pressing keyboard keys
window.addEventListener("keydown", (e) => {
    if((e.key >= 0 && e.key <= 9) || e.key === "."){
        display.textContent += e.key;
    }
});


const operatorAction = operators.forEach(operator => {
    operator.addEventListener("click", () => {
        firstOperand = Number(display.textContent);
        subDisplay.textContent = firstOperand + " " + operator.textContent;
        display.textContent = "";
        operatorStored = operator.textContent;
    })
});


// Equal Result

//Enter method has problems since if you mix clicks with taps you have to change the time of reset
//So it does not stay clicked and operate
// window.addEventListener("keydown", (e) => {
//     if(e.key === "Enter"){
//         secondOperand = Number(display.textContent);
//         display.textContent = "";
//         result = operate(operatorStored, firstOperand, secondOperand);
//         display.textContent = result;
//         //result gets displayed as the first operand after calc
//     }
// });


const results = equalBtn.addEventListener("click", () => {
    secondOperand = Number(display.textContent);
    subDisplay.textContent += " " + secondOperand;
    display.textContent = "";
    result = operate(operatorStored, firstOperand, secondOperand);
    display.textContent = result;
    //result gets displayed as the first operand after calc
});


//Display with onclick
function displayChange(ele){
    display.textContent += ele.textContent;
}


//operate

function operate(operator, fnum, snum) {
    switch(operator) {
        case "+":
            return add(fnum, snum);
            break;
        case "-":
            return subtract(fnum, snum);
            break;
        case "/":
            return division(fnum, snum);
            break;
        case "x":
            return mul(fnum, snum);
            break;
        default:
            break;
    }
}


//Clear
clearContent.addEventListener("click", () => {
    clear();
});


//Delete
window.addEventListener("keydown", (e) => {
    if(e.key === "Backspace"){
        deletion();
    }
});

deleteContent.addEventListener("click", () => {
    deletion();
});


//Functions

function clear() {
    display.innerHTML = null;
    subDisplay.innerHTML = null;
}

function deletion() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);
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



