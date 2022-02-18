const input = document.getElementById('input')
const currentOperation = document.getElementById('result')

let a = ''
let b = ''
let op = ''
let res = ''
let endOperation = false

//Get buttons

const numbers = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.op-btn')
const equal = document.getElementById('eq-btn')
const negative = document.getElementById('substract')
const decimal = document.getElementById('dec-btn')
const del = document.getElementById('del')
const cle = document.getElementById('cle')

//Event-listeners for each btn

numbers.forEach(function(btn) {
    btn.addEventListener('click', () => appendNumber(btn.textContent))
})
operators.forEach(function(btn) {
    btn.addEventListener('click', () => {
        appendOperand(btn.textContent)
        op = btn.textContent
    })
})
equal.addEventListener('click', evaluate)
decimal.addEventListener('click', addDec)
del.addEventListener('click', deleteNum)
cle.addEventListener('click', clear)

//Add/delete num and ops to display

function appendNumber(number) {
    input.textContent += number

    if(currentOperation.textContent === "You can't divide by 0") {
        currentOperation.textContent = ''
        resetVar()
    }
}
function appendOperand(operand) {
    a = input.textContent - 0
    input.textContent += operand
    currentOperation.textContent = input.textContent
    input.textContent = ''
    if(operand === '-' && currentOperation.textContent === '-') {
        currentOperation.textContent = ''
        input.textContent = operand
        a = -a
    }
}
function deleteNum() {
    input.textContent = input.textContent.toString().slice(0, -1)
}
function clear() {
    input.textContent = ''
    currentOperation.textContent = ''
    resetVar()
}
function addDec() {
    if(input.textContent.includes('.')) {
        
    }
    else {
        input.textContent += '.'
    }
}

//Get result

function evaluate() {
    b = input.textContent - 0
    currentOperation.textContent += b
    result()
    errorDivByZero()
    resetVar()
    endOperation = true
}

function result() {
    if (op === '+'){
        res = add(a, b)
        input.textContent = roundUp()
    }
    else if (op === '-'){
        res = substract(a, b)
        input.textContent = roundUp()    
    }
    else if (op === '*'){
        res = multiply(a, b)  
        input.textContent = roundUp()
    }
    else if (op === '/'){
        res = divide(a, b)
        input.textContent = roundUp()    
    }
}

//Operations

function add(a, b) {
    return a + b
}
function substract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

//Reset variables

function resetVar() {
    a = ''
    b = ''
    op = ''
}

function errorDivByZero() {
    if(op === '/' && b === 0) {
        currentOperation.textContent = "You can't divide by 0"
        input.textContent = ''
    }
}

function roundUp() {
    return Math.round(res * 1000) / 1000
}

//Arreglar bug del =, num negativo