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