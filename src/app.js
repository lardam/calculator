const topVisor = document.getElementById('top-visor-numbers')
const bottomVisor = document.getElementById('bottom-visor-numbers')

let a
let b
let op = ''

const numbers = document.querySelectorAll('.num-btn')
const operands = document.querySelectorAll('.op-btn')
const clearBtn = document.getElementById('clear')
const deleteBtn = document.getElementById('delete')

clearBtn.addEventListener('click', () => {
    clearBottomVisor()
    clearVariables()
    topVisor.textContent = ''
})

deleteBtn.addEventListener('click', () => {
    bottomVisor.textContent = bottomVisor.textContent.toString().slice(0, -1)
})

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        bottomVisor.textContent += num.textContent
    })
})

operands.forEach((ops) => {
    ops.addEventListener('click', () => {
        a = parseInt(bottomVisor.textContent, 10)
        op = ops.textContent
        clearBottomVisor()
        topVisor.textContent += a + ' ' + op
    })
})

function clearBottomVisor(){
    bottomVisor.textContent = ''
}

function clearVariables(){
    let a
    let b
    let op = ''
}
