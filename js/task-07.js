
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) 
// і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, 
// перетягуючи повзунок, буде змінюватися розмір тексту.


const rangeEl = document.querySelector('#font-size-control');
// console.log(rangeEl.type);
// console.log(rangeEl.min);
// console.log(rangeEl.max);

const textEl = document.querySelector('#text');

rangeEl.addEventListener('input', onInputChangeSize);

function onInputChangeSize () {
    textEl.style.fontSize = `${rangeEl.value}px`;
    console.log(`${rangeEl.value}px`);
}
