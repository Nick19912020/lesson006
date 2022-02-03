
let x = 56;

const asking = function () {
    let result = prompt("Угадай число от 1 до 100");
    let n = +result;
    if (result === null) {
        alert("Игра окончена");
    } else if (n < x) {
        alert("Загаданное число больше");
        asking();
    } else if (n > x) {
        alert("Загаданное число меньше");
        asking();
    } else if (isNaN(n)) {
        alert("Введи число!");
        asking();
    } else if (n === x) {
        alert("Поздравляю, Вы угадали!!!");
    }
};
asking();