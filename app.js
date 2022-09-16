const clearContent = document.querySelector(".clear");
const deleteContent = document.querySelector(".delete");

const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const pointBtn = document.querySelector("#point-btn");
const equalBtn = document.querySelector("#equal-btn");
const display = document.querySelector(".display");


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



