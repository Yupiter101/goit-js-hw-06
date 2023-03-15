const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const listIngredients = ingredients.map(makeListIngredient);

function makeListIngredient(item){
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = item;
  return itemEl;
}

ingredientsEl.append(...listIngredients);

