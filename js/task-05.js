
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані 
// повинен відображатися рядок "Anonymous"



const inputEl = document.querySelector('#name-input'); //input
const outputEl = document.querySelector('#name-output'); //output

inputEl.addEventListener('input', onOutputText);

function onOutputText(event) {
    let val = event.currentTarget.value;
    val === "" ? val = 'Anonymous' : val ;
    outputEl.textContent = val;
}


