const input = document.getElementById('input')
const currentOperation = document.getElementById('result')
const inputText = input.textContent
const currOpText = currentOperation.textContent

let a = ''
let b = ''
let op = ''
let endOperation = false

//Get buttons

const numbers = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.op-btn')
const equal = document.getElementById('eq-btn')
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
cle.addEventListener('click', clear)
del.addEventListener('click', deleteNum)

//Add num and ops to display

function appendNumber(number) {
    input.textContent += number
}

function appendOperand(operand) {
    a = input.textContent - 0
    input.textContent += operand
    currentOperation.textContent = input.textContent
    input.textContent = ''
}

function deleteNum() {
    input.textContent = input.textContent.toString().slice(0, -1)
}

function clear() {
    input.textContent = ''
    currentOperation.textContent = ''
    a = ''
    b = ''
}

//Get result

function evaluate() {
    b = input.textContent - 0
    currentOperation.textContent += input.textContent
    result()
}

function result() {
    if (op === '+'){
        input.textContent = add(a, b)
    }
    else if (op === '-'){
        input.textContent = substract(a, b)
    }
    else if (op === '*'){
        input.textContent = multiply(a, b)
    }
    else if (op === '/'){
        input.textContent = divide(a, b)
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

//Arreglar bug del =, agregar fix para los numeros decimales
//Agregar fix para cuando se divide por 0, agregar fix para
//cuando se quiera usar numeros negativos

if(endOperation = true) {
    equal.addEventListener('click', () => {
        //currentOperation.textContent = input.textContent
    })
} 