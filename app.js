//We get all the buttons
//We listen for an click event to happen to any of them to get their value 
//Then we display the value in our display 
//If we've clicked a specific operator activate the operate function to it when = is clicked
//Results are returned as the first operand now
//Need to add the new operator and the second operand
//Keep repeating


// 1. I press the 5 button, 5 appears on the display
// 2. I then press the multiply operator, 5 disappears, 5 becomes our first operand
// 3. I then press the 6 button, 6 appears on the display
// 4. I then press the equals button, 6 disappears, 6 becomes our second operand
// 5. We use the operate function, with whatever one of our operations we clicked as the first argument, with firstOperand and secondOperand as the other arguments
// 6. We then display the result of operate on the screen 
// With that pseudocode and the variables you have setup, you should be able to get the calculator working
// At least for the first calculation
// For long sets of calculations, you'll need to also use the operate function whenever one of the operators is clicked

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
        display.textContent = e;
    }
});


const operatorAction = operators.forEach(operator => {
    operator.addEventListener("click", () => {
        firstOperand = Number(display.textContent);
        display.textContent = "";
        operatorStored = operator.textContent;
    })
});


// //Get first operand
// const operandsAction = operands.forEach(operand => {
//     operand.addEventListener("click", () => {
//         firstOperand = display.textContent;
//     })
// });


// //Get second operand
// const secondOperandAction = operands.forEach(operand => {
//     operand.addEventListener("click", ()=>{
//         secondOperand = display.textContent;
//     })
// })



const results = equalBtn.addEventListener("click", () => {
    secondOperand = Number(display.textContent);
    display.textContent = "";
    result = operate(operatorStored, firstOperand, secondOperand);
    display.textContent = result;
    //result gets displayed as the first operand after calc
    // firstOperand = result;
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



