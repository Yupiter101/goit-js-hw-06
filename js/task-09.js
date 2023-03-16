// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і виводить значення кольору в span.color.





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.body;
const bColorName = document.querySelector(".color");

// bodyEl.style.backgroundColor = getRandomHexColor();
// console.log(bodyEl);


const buttonEl = document.addEventListener('click', onColorChange);

function onColorChange() {
  let newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  bColorName.textContent = newColor;
}