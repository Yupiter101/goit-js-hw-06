

// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
// якщо неправильна кількість - червоним.







const inputEl = document.querySelector('#validation-input');

console.log(inputEl.dataset.type); //wrap


// inputEl.classList.add(valid);

console.log(inputEl);
// console.log(inputEl.getAttribute('id'));


// blur
    // inputEl.addEventListener('blur', onInputBlur);
    // function onInputBlur() {console.log('not focus');}



// inputEl.removeAttribute('[id="validation-input"]');


// console.log(inputEl);
// inputEl.id


// elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
// elem.getAttribute(name) - отримує значення атрибута і повертає його.
// elem.setAttribute(name, value) - встановлює атрибут.
// elem.removeAttribute(name) - видаляє атрибут.
// elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.


const input = document.querySelector('#validation-input'); 
  
 input.addEventListener('blur', event => { 
   const requiredLength = input.getAttribute('data-length'); 
   const currentLength = event.target.value.length; 
  
   if (currentLength === Number(requiredLength)) { 
     input.classList.add('valid'); 
     input.classList.remove('invalid'); 
   } else { 
     input.classList.add('invalid'); 
     input.classList.remove('valid'); 
   } 
 });