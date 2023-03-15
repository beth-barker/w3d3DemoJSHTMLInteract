
console.log('JS Connected!')


// Set up a variable for the h1 tag to change with plus, minus, and reset

let counter = document.querySelector('h1')




// Step 1: Grab HTML element

let plusBtn = document.querySelector("#plus-btn")


// Step 2: Write a function

let count = 0

const increase = () => {
    count += 1
    console.log(count)
    counter.textContent = count
}

// Step 3: Combine steps 1 and 2 using an event listener, don't add invocation for function

plusBtn.addEventListener('click', increase)


// Create one for minus button

let minusBtn = document.querySelector("#minus-btn")

const decrease = () => {
    count--
    console.log(count)
    counter.textContent = count
}

minusBtn.addEventListener('click', decrease)

// Create click event for reset button to set count to zero

let resetBtn = document.querySelector("#reset-btn")

const reset = (evt) => {
    count = 0
    console.log(count)
    counter.textContent = count
    console.log(evt.target.id)
}

resetBtn.addEventListener('click', reset)


// When a button is clicked, change the theme

const themeBtns = document.querySelectorAll('.theme-buttons')


const selectTheme = (evt) => {

    console.log(evt.target.textContent)
    //giving the item a new class by replacing original class with the textContent
    document.querySelector('body').classList = evt.target.textContent
    document.querySelector('main').classList = evt.target.textContent

    const btns = document.querySelectorAll('button')
    console.log(btns)
    
    for(let i = 0; i < btns.length; i++){
        btns[i].classList = evt.target.textContent
    }
}

for(let i = 0; i < themeBtns.length; i++){
    themeBtns[i].addEventListener('click', selectTheme)
}