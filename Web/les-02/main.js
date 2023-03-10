// let a = 5;
// alert(a)

// a = 'Привет'
// alert(a)

// let a = 5;
// console.log(a);

// a = 'Привет';
// console.log(a);

// Чаще всего пишут константы - позволяет избежать динамической смены типа
// const b = 5;
// Изначально создаем как константы - только если точно планируете менять, тогда let



// Задача 2: Получить от пользователя два числа и вывести в диалоговое окно сумму значений, которые ввел пользователь, вывод должен выглядеть так: Результат сложения чисел 5 и 2 равен 7.
// const num1 = Number.parseInt(prompt('Введите первое число:'));
// const num2 = Number.parseInt(prompt('Введите второе число:'));
// Сейчас рекомендуется использовать parseInt через Number.parseInt
// раньше этот метод был бесхозный, сейчас его определили к классу Number

const num1 = Number.parseFloat(prompt('Введите первое число:'));
const num2 = Number.parseFloat(prompt('Введите второе число:'));

console.log(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}`);
alert(`Результат сложения чисел ${num1} и ${num2} равен ${num1 + num2}`);

// Результат сложения чисел 0.1 и 0.2 равен 0.30000000000000004
// так получается из-за того, что комп сипользует двоичную систему

alert(`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);

// ФУНКЦИИ в JS пишут все внизу - сразу видно их все
// Сделаем через функцию расчет суммы
function sum(x, y) {
    return x + y;
};



// Задача 3: Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени в консоль. Проверить работоспособность функции.
const userName = prompt('Введите свое имя:');
sayHello(userName);

function sayHello(name) {
    console.log(`Приветствую тебя ${name}`);
}



// Задача 4: вывести на экран в диалоговом окне текст с сообщением "Вам хорошо живется?" и кнопками "ОК", "Отмена", для чего необходимо использовать confirm. - При нажатие на кнопку "ОК" вывести в диалоговом окне текст с сообщением "Тогда мы идем к вам!". - При нажатии на кнопку "Отмена" вывести в диалоговом окне текст с сообщением "Ну вы держитесь там!"
const isConfirm = confirm('Вам хорошо живется?')

if (isConfirm == true) {
    alert('Тогда мы идем к вам!');
} else {
    alert('Ну вы держитесь там!');
}



// Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно
// if (product == "Мандарины) {
//     alert('Мандарины стоят 100 руб/кг');
// } else if (product == "Бананы") {
//     alert('Бананы и груши стоят 70 руб /кг');
// } else if (product == "Груши") {
//     alert('Бананы и груши стоят 70 руб /кг');
// } else {
//     alert('Нет такого продукта');
// }
const product = prompt('Введите название продукта').toLowerCase;
// toLowerCase - переводит все в нижний регистр

switch (product) {
    case "Мандарины":
        alert('Мандарины стоят 100 руб/кг');
        break;
    case "Бананы":
    case "Груши":
        alert('Бананы и груши стоят 70 руб /кг');
        break;
    default:
        alert('Нет такого продукта');
        break;
}



// Задача 6 (доп) с реальногособеседования
// Функция getMaxEvenElement принимает массив с целыми числами, необходимо реализовать функцию так, чтобы она возвращала значение большего элемента массива, который записан в четном индексе включая 0

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])) // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])) // 31