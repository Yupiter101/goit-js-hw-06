function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Стартовые параметры елемента ====
const widthEl = 30;
const heightEl = 30;
const stepUpWidth = 10;
const stepUpheight = 5;
// Стартовые параметры елемента /====


const inputEl = document.querySelector('input'); // input
const createBtn = document.querySelector('[data-create]'); // Кнопка
const destroyBtn = document.querySelector('[data-destroy]'); // Кнопка
const boxes = document.querySelector('#boxes'); // boxes


createBtn.addEventListener('click', onCreate);
destroyBtn.addEventListener('click', onDestroyV4);
// inputEl.addEventListener('input', onReadNum);


// ==== Функция генерации елементов =====

function onCreate() {
  if(inputEl.value > 100 || inputEl.value < 1) {
    alert('Введите число от 1 до 100');
    return
  }
  createBoxes(inputEl.value);
}


function createBoxes(amount) {
  const newElements =  [];
  console.log('create', inputEl.value);

  for(let i=0; i<amount; i+=1){
    // create <div>
    const newElement = document.createElement('div');
    newElement.style.width = `${widthEl + i * stepUpWidth}px`;
    newElement.style.height = `${heightEl + i * stepUpheight}px`;
    // newElement.style.margin = '5px';
    newElement.style.backgroundColor = getRandomHexColor();
    // create <p>
    const textInElement = document.createElement('p');
    textInElement.textContent = i+1;
    textInElement.style.textAlign = 'center';

    newElement.append(textInElement);
    newElements.push(newElement);
  }

  boxes.append(...newElements);
}

// ==== /Функция генерации елементов  ===== конец




// === Функция очистки ====

  // === Вариант 1
  function onDestroyV1() {
    console.log('Destroy');
    inputEl.value = 0;
    boxes.innerHTML = "";
  }

  // === Вариант 2
  function onDestroyV2() {
    console.log('Destroy V2');
    inputEl.value = 0;
    // boxes.removeChild(boxes.firstChild);
    boxes.removeChild(boxes.lastChild);

  }

  // === Вариант 3
  function onDestroyV3() {
    inputEl.value = 0;
    while(boxes.firstChild){
      console.log('Destroy V3');
      boxes.removeChild(boxes.lastChild);
    }
  }

  // === Вариант 4
  function onDestroyV4() {
    inputEl.value = 0;
    console.log('Destroy V4');

    const arrBoses =  boxes.querySelectorAll('div');
    arrBoses.forEach(box => box.remove());
  }

// === Функция очистки ==== Конец






// создаем один елемент

// // create <div>
// const newElement = document.createElement('div');
// newElement.style.width = '100px';
// newElement.style.height = '100px';
// newElement.style.margin = '10px';
// newElement.style.backgroundColor = 'red';
// // create <p>
// const textInElement = document.createElement('p');
// textInElement.textContent = 'numElt';
// textInElement.style.textAlign = 'center';
// newElement.append(textInElement);
// boxes.append(newElement);


// // ==== создаем много елементов =====

// const newElements =  [];
// const myNumber = 10;

// for(let i=0; i<myNumber; i+=1){
//   // create <div>
//   const newElement = document.createElement('div');
//   newElement.style.width = '100px';
//   newElement.style.height = '50px';
//   newElement.style.margin = '10px';
//   newElement.style.backgroundColor = 'red';
//   // create <p>
//   const textInElement = document.createElement('p');
//   textInElement.textContent = 'numElt';
//   textInElement.style.textAlign = 'center';

//   newElement.append(textInElement);
//   newElements.push(newElement);
// }

// boxes.append(...newElements);

// // ==== /создаем много елементов ===== конец

















// console.log(inputEl);
// console.log(createBtn);
// console.log(destroyBtn);
// console.log(inputEl);

