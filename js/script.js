const input = document.getElementById('input')
const result = document.getElementById('result')
input.innerText = ''

//Get buttons

const numbers = document.querySelectorAll('.num-btn')
const operators = document.querySelectorAll('.op-btn')
const equal = document.getElementById('eq-btn')
const decimal = document.getElementById('dec-btn')
const del = document.getElementById('del')
const cle = document.getElementById('cle')

numbers.forEach(function(btns) {
    btns.addEventListener('click', () => appendNumber(btns.textContent))
})

operators.forEach(function(btns) {
    btns.addEventListener('click', () => appendOperand(btns.textContent))
})

del.addEventListener('click', deleteNum())
cle.addEventListener('click', clear())

function clear() {
    input.textContent = ''
    result.textContent = ''
}

function deleteNum() {
    input.textContent--
}

function appendNumber(value) {
    input.textContent += value
}

function appendOperand(value) {
    input.textContent = value
}