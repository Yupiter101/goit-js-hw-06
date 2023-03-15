

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const formEl = document.querySelector('form');
// console.log(form);

formEl.addEventListener('submit', onCheckSubmit);

function onCheckSubmit(event) {
    event.preventDefault(); //Отмена перезагрузки
    const user = {};
    
    user.email = event.currentTarget.elements.email.value;
    user.password = event.currentTarget.elements.password.value;

    // console.log(user.email);
    // console.log(user.password);

    if(user.email === "" || user.password === "" ){
        // console.log('Заповни поля епт');
        alert('Всі поля повинні бути заповнені.');
        return
    }

    console.log('Ok');
    // formEl.reset();
    event.currentTarget.reset();
    console.log(user);
    // return user;
}








// formLogin.addEventListener('submit', event => {
//     event.preventDefault();
//      const formDate = new FormData(event.currentTarget)
//      formDate.forEach((value, name) => {
//     if (value.email && value.password) {
//              formLogin.reset();
//          } else {
//             alert('Всі поля повинні бути заповнені');
//           }
//      })
//     });


// console.log(555);