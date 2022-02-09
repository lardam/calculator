const input = document.getElementById('input')
const result = document.getElementById('result')
input.innerText = ''

let a = ''
let b = ''

//Get buttons

const numbers = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.op-btn')
const equal = document.getElementById('eq-btn')
const decimal = document.getElementById('dec-btn')
const del = document.getElementById('del')
const cle = document.getElementById('cle')

//Get buttons - operators

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('substract')
const mulBtn = document.getElementById('multiply')
const divBtn = document.getElementById('divide')

//Write on calculator

numbers.forEach(function(btns) {
    btns.addEventListener('click', () => appendNumber(btns.textContent))
})

operators.forEach(function(btns) {
    btns.addEventListener('click', () => appendOperand(btns.textContent))
})

del.addEventListener('click', deleteNum)
cle.addEventListener('click', clear)
equal.addEventListener('click', endOperation)

function appendNumber(number) {
    input.textContent += number
}

function appendOperand(value) {
    result.textContent = input.textContent
    result.textContent += value
    input.textContent = ''
}

//Assign number to variables

console.log(result.typeof) //buscar typeof, crear string en result

//Operations

function add() {
    return a + b;
}

function substract() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}

function endOperation(){
    result.textContent += input.textContent
}
                           
function deleteNum() {
    input.textContent = input.textContent.toString().slice(0, -1)
}

function clear() {
    input.textContent = ''
    result.textContent = ''
}