const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//  ===== Завдання ===== 

  // Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
  //  Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().
  // Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
  // Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.


// ===== Рішення ======

  // Берем ссилку на елемент ДОМ
    const galleryListEl = document.querySelector('.gallery');

  // Створюєм усі елементи li по Шаблону
    const itemsEl = images.map(({url, alt}) => {
      return `<li><img class="gallery-img" src="${url}" alt="${alt}"></li>`;
    }).join("");

  // Шаблон рядка
    // const itemEl = `<li><img class="gallery-img" src="${images[1].url}" alt="${images[1].alt}"></li>`;


  // Додаємо усі елементи в ДОМ gallery
    galleryListEl.insertAdjacentHTML('beforeend', itemsEl);

  



  // ===== Чорновик ======

    // Створюєм один елемент li 
    // const itemEl = `<li><img class="gallery-img" src="${images[1].url}" alt="${images[1].alt}"></li>`;

    // Додаємо елемент в gallery
    // galleryListEl.insertAdjacentHTML('beforeend', itemEl);