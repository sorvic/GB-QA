const paginationButtonsEls = document.querySelectorAll('.pagination');
// дай мне все кнопки на странице с классом pagination
// console.log(paginationButtonsEls);

// for (let i = 0; i < paginationButtonsEls.length; i++) {
//     const button = paginationButtonsEls[i];
//     button.addEventListener('click', function () {
//         console.log(123);
//     });
//     // каждый раз при клике по кнопке получаем в консоль 123 
// }

for (let i = 0; i < paginationButtonsEls.length; i++) {
    const button = paginationButtonsEls[i];
    button.addEventListener('click', async function () {
        // функцмия без имени - неименованная, ее возможно создать
        // - потому что мы ее передаем по клику и болоьше ее нигде
        // не используем
        // const page = Number.parseInt(button.dataset.page);
        const page = +button.dataset.page;
        const users = await getUsers(page);
        // console.log(page);
        // console.log(users);
        renderUsers(users);
    });
    // каждый раз при клике по кнопке получаем номер стр. 
}

async function getUsers(page) {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    const json = await response.json();
    // преобразуем данные в удобном виде и выводим в консоль
    // console.log(json);
    return json.data;
}
// передаем пользователей по ответу от сервера

// получаем и выводим данные пользователей
function renderUsers(users) {
    let content = "";
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        // получаем и формируем наш контент
        // перебираем наш массив (data) и формируем имя, фамилию, аватар
        content += `
            <div>
                <img src="${user.avatar}">
                <p>${user.first_name} ${user.last_name}</p>
            </div>
        `;
    }
    // выводим полученный контент
    document.querySelector('#app').innerHTML = content;
}