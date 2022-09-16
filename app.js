const clearContent = document.querySelector(".clear");
const deleteContent = document.querySelector(".delete");

const numberBtn = document.querySelectorAll("[data-number]");
const operatorBtn = document.querySelectorAll("[data-operator]");
const pointBtn = document.querySelector("#point-btn");
const equalBtn = document.querySelector("#equal-btn");
const display = document.querySelector(".display");



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



