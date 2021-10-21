// Задание 1
function one() {
    const arrayUserStrings = prompt('Введите 2 строки через запятую').split(',');
    alert(new RegExp(arrayUserStrings[1], 'i').test(arrayUserStrings[0]));
}

// Задание 2
function two() {
    const userString = prompt('Введите строку');
    const userNum = prompt('Ведите число');
    alert(userString.slice(0, userNum).concat('...'));
}

// Задание 3
function three() {
    const string = prompt('Введите дату и время по примеру:', '12/02/2021 12-00');
    alert(string.replace(/\//g, '.').replace(/-/, ':'));
}

// Задание 4
function four() {
    const fio = prompt('Введите ФИО');
    alert(/^[А-Я]([а-я]+) [А-Я]([а-я]+)( [А-Я]([а-я]+)(вич|вна))?$/.test(fio));
}


// Задание 5
function five() {
    const string = prompt('Введите строку в PamalCase:', 'PamelCase');
    alert(string.replace(/^[A-ZА-Я]/, (match) => {
        return match.toLowerCase()
    }).replace(/[A-ZА-Я]/g, (match) => {
        return '_' + match.toLowerCase()
    }));
}

// Задание 6
function six() {
    const multilineString = prompt('введите html с комментариями:', `<div>rfrf</div>
<!--\trjvvty
nfhbq--><!--\t<p>комментарий2</p>-->
<p>пкпкпк</p>
<!--\t<p>комментарий2</p>-->
<div></div>`);
    alert(multilineString.match(/<!--(.*?)-->/gsm));
}


// Задание 7
function seven() {
    const stringWithNumbers = prompt('Введите строку, содержащую целые либо десятичные числа:', '0.4rerff10fjvn20.7fjnv13 45 3kdmd,dd3374.5mff34mm5');
    alert(stringWithNumbers.match(/\d(\d|\.)*\d?/g));
}


// Задание 8
function eight() {
    const regexp = /^\w{4}(-?)\w{4}(-?)\w{4}(-?)\w{4}$/;
    let userIdentificator = prompt('Введите идентификатор');
    if (regexp.test(userIdentificator)) {
        alert('Ведется поиск');
    } else {
        for (; !regexp.test(userIdentificator);) {
            userIdentificator = prompt('Неверный идентификатор.Введите идентификатор.');
            if (regexp.test(userIdentificator)) {
                alert('Ведется поиск');
                break;
            }
        }
    }
}

document.querySelector('#one').onclick = one;
document.querySelector('#two').onclick = two;
document.querySelector('#three').onclick = three;
document.querySelector('#four').onclick = four;
document.querySelector('#five').onclick = five;
document.querySelector('#six').onclick = six;
document.querySelector('#seven').onclick = seven;
document.querySelector('#eight').onclick = eight;
