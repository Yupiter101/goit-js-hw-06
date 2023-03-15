const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const valueOutput = document.querySelector('#value');
let counter = 0;



// V1

// function onDecrementClick() {
//     counter -= 1;
//     valueOutput.textContent = counter;
//     console.log(counter);
// }

// function onIncrementClick() {
//     counter += 1;
//     valueOutput.textContent = counter;
//     console.log(counter);
// }

// btnDecrement.addEventListener('click', onDecrementClick);
// btnIncrement.addEventListener('click', onIncrementClick);




// V2

btnDecrement.addEventListener('click', ()=>{
    counter -= 1;
    valueOutput.textContent = counter;
    console.log(counter);
});


btnIncrement.addEventListener('click',  ()=>{
    counter += 1;
    valueOutput.textContent = counter;
    console.log(counter);
});

