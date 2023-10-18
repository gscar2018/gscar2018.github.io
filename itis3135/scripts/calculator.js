const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action

    if(e.target.matches('button')){
        // do something
    }
    if(!action){
        console.log('number key!')
    }
    if(
        action === 'add'||
        action === 'subtraction' ||
        action === 'multiply' ||
        action === 'divide'
    ){
        console.log('operator key!')
    }
    if(action ==='decimal'){
        console.log('decimal key!')
    }
    if(action === 'clean'){
        console.log('clear key!')
    }
    if(action === 'calculate'){
        console.log('equal key!')
    }
})

