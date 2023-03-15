
// Вариант 1

const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');

function makeListTitles (element) {
    const titleEl = element.querySelector('h2');
    const itemsEl = element.querySelectorAll('.item li');
    console.log('Category:', titleEl.textContent);
    console.log('Elements:', itemsEl.length);
    console.log('');
}

console.log(`Number of categories: ${itemsEl.length}`);
itemsEl.forEach(makeListTitles);




// Вариант 2

// const categoriesEl = document.querySelector('#categories');
// const titlesEl = categoriesEl.querySelectorAll('h2');

// console.log(`Number of categories: ${titlesEl.length}`);
// titlesEl.forEach(makeListTitle);

// function makeListTitle (element) {
//     const titlesList = element.nextElementSibling.children;
//     console.log('Category:', element.textContent);
//     console.log('Elements:', titlesList.length);
//     console.log('');
// }










// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

