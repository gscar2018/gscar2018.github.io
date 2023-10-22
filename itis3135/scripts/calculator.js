const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent

        if(
            action === 'add'||
            action === 'subtraction' ||
            action === 'multiply' ||
            action === 'divide'
        ){
            key.classList.add('is-depressed')
        }

        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
})


if(e.target.matches('button')){
    // do something
}
if(!action){
    if(displayedNum === '0'){
        display.textContent = keyContent
    } else{
        display.textContent = displayedNum + keyContent
    }
}

if(action ==='decimal'){
    display.textContent = displayedNum + '.'
}
if(action === 'clean'){
    console.log('clear key!')
}
if(action === 'calculate'){
    console.log('equal key!')
}

