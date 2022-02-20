const input = document.getElementById('input')
const currentOp = document.getElementById('result')

let a = ''
let b = ''
let op = ''
let res = 0

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
        appendOperator(btn.textContent)
        op = btn.textContent
    })
})
equal.addEventListener('click', evaluate)
decimal.addEventListener('click', addDec)
del.addEventListener('click', deleteNum)
cle.addEventListener('click', clear)

//Add numbers and operators to the input

function appendNumber(number) {
    input.textContent += number
    res = ''
}

function appendOperator(operator) {
    if(input.textContent !== '') {
        operations(operator)
    }
    else if(a === '') {
        zeroStart(operator)
    }
    else if(op !== ''){
        changeOp(operator)
    }
}
function operations(operator) {
    a = input.textContent - 0
    op = operator
    currentOp.textContent = a + operator
    input.textContent = ''
}
function zeroStart(operator) {
    a = 0
    currentOp.textContent = a + operator
}
function changeOp(operator){
    op = operator
    currentOp.textContent = a + op
}

//End operation - get a response for each diferent event

function evaluate() {
    if(res === '' && input.textContent !== ''){
        b = input.innerText - 0
        currentOp.textContent += b
        result()
    }
    else if(res !== '') {
        restart()
        currentOp.textContent = ''
    }
    errorDivByZero()
    restart()
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
        input.textContent = res
    }
    else if (op === '/'){
        res = divide(a, b)
        res = roundUp()
        input.textContent = res 
    }
}
function restart() {
    a = ''
    b = ''
    op = ''
}
function errorDivByZero() {
    if(op === '/' && b === 0) {
        currentOp.textContent = "You can't divide by 0"
        input.textContent = ''
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
    if(b === 0) {
        return null
    }
    return a / b
}

//Allow clearing the display or delete a number

function deleteNum() {
    input.textContent = input.textContent.toString().slice(0, -1)
}
function clear() {
    input.textContent = ''
    currentOp.textContent = ''
    restart()
}

//Add a decimal to the number

function addDec() {
    if(input.textContent.includes('.')) {}
    else {
        input.textContent += '.'
    }
}

//Don't allow number with more than 3 tenths

function roundUp() {
    return Math.round(res * 1000) / 1000
}

//Allow the use of the keyboard

function keyboardInput() {
    window.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
        if (e.key === '.') addDec()
        if (e.key === 'Backspace') deleteNum()
        if (e.key === 'Escape') clear()
        if (e.key === 'Enter' || e.key === '=') evaluate()
        if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') appendOperator(e.key)
    })
}

keyboardInput()
