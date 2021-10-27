// Задание 1
const arr = [2,3,4,5,6,6,5,5,8,2,3,76,'dedd', 'привет', 'хай', 'хелло', 'привет'];
console.log(Array.from(new Set(arr)));

// Задание 2
const arr = [2,3,4,5,6,6,5,5,8,2,3,76,'dedd', 'привет', 'хай', 'хелло', 'привет',2,3,4];
const newArr = [];
arr.forEach((elem, index) => {
    newArr[arr.length-index-1] = elem;
});
console.log(newArr);

// Задание 3
const arr = [[1,2],[3,4],[5,6],[7,8]];
const obj = Object.fromEntries(arr);
console.log(obj);

// Задание 4
const obj = {
    1 : 32,
    'ewr' : 43,
    'ccc' : 'ddd',
    3 : '232',
    4 : 12,
};
let sum = 0;
for (let key in obj) {
    if (typeof (obj[key]) == 'number') {
        sum += obj[key];
    }
}
console.log(sum);

// Задание 5
const arr = [1,1,1,2,3,43,321,43,56544];
console.log(arr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
})/arr.length);

// Задание 6
function Calculator(defaultValue) {
    this.defaultValue = defaultValue;
    this.addition = (value) => (console.log(this.defaultValue + value));
    this.subtraction = (value) => (console.log(this.defaultValue - value));
    this.multiplication = (value) => (console.log(this.defaultValue * value));
    this.division = (value) => (console.log(this.defaultValue / value));
    this.clear = () => { this.defaultValue = 0; };
    this.newValue = (value) => {this.defaultValue = value;}
}

// Задание 7
const arr = [1,'rerrr', 'qwerty', 3, '3', 5, {1 : 32, '3' : 23}, {'323': 'frfrd', 234 : 2355}];
function objectFromArray(arr) {
    const obj = {
        numbers: [],
        strings: [],
        objects: [],
    };
    arr.forEach((elem) => {
        if (typeof elem == 'number') {
            obj.numbers.push(elem);
        }
        if (typeof elem == 'string') {
            obj.strings.push(elem);
        }
        if (typeof elem == 'object') {
            obj.objects.push(elem);
        }
    });
    return obj;
}

// Задание 8
const arr = [1, 2, 5, 55, -6, 34, 567, 12, 3, 4, 5, -4, -21,568];

function arrayBetweenValues(arr, val1, val2) {
    const newArr = [];
    if (val2 >= val1) {
        arr.forEach((elem) => {
            if (elem >= val1 && elem <= val2)
                newArr.push(elem)
        })
    }
    if (val1 > val2) {
        arr.forEach((elem) => {
            if (elem >= val2 && elem <= val1)
                newArr.push(elem)
        })
    }
    return newArr;
}

// Задание 9
const str1 = 'robert';
const str2 = 'trebro';

function isAnagram(str1, str2) {
    if (str1.split('').sort().join('') === str2.split('').sort().join('')) {
        console.log(true);
    } else {console.log(false)}
}
isAnagram(str1, str2);

// Задание 10
const obj = {
    1: 32,
    'ewr': 43,
    'ccc': 'ddd',
    3: '232',
    4: 12,
    'info': function () {
        let str = '';
        new Map(Object.entries(this)).forEach((value, key) => {
            if (key != 'info') {
                str = str.concat(`${key}:${value}, `)
            }
        });
        console.log(str.slice(0, str.length - 2));
    },
    5: '2212wsw'
};

obj.info();

// Задание 11

function SetPrope() {
    this.setProps = (name, value, {writable=true, configurable=true, enumerable=true}) => {
        Object.defineProperties(this, {
            [name] : {
                value : value,
                writable : writable,
                configurable : configurable,
                enumerable : enumerable,
            }
        })
    }
}

const obj = new SetPrope();
obj.setProps(3,4, {enumerable: false});


// 1. На вход поступает массив, вывести массив, удалив неуникальные значения.
// 2. На вход поступает массив, реверсировать значения (подобно методу reverse) метод reverse не использовать.
// 3. На вход поступает массив, содержащий массивы, в которых хранится два элемента. Преобразовать массив в объект, где ключами являются нулевой индекс вложенныхых массивов, а значениями являются элементы с индексом один.
// 4. На вход поступает объект, вывести сумму числовых свойств объекта.
// 5. На вход поступает массив с числами, вывести среднее арифметическое элементов массива.
// 6. Создать функцию-конструктор для объекта "калькулятор", объект должен иметь поле, хранящее текущее значение и методы сложения, вычитания, умножения и деления, принимающие число и манипулирующий свойством значения в соответствии с назначением метода, а так же функцию, сбрасывающую значение в ноль.
// 7. Функция принимает смешанный массив (содержащий значения чисел, строк и объектов), вернуть объект с полями numbers, strings и objects, содержащими массив со значениями, соответствующими названию поля.
// 8. Функция принимает массив чисел и два числовых значения, вернуть новый массив, содержащий элементы первого массива, значение которых попадает под диапазон переданных в функцию чисел (второе переданное число может быть больше первого)
// 9. Функция принимает две строки. Вывести true, если строки являются анаграммами, в противном случае false
// 10. Создать объект, выводящий в консоль все ключи и значения объекта в формате "ключ: значение" через запятую (считать, что значением ключа объекта не может быть объектом или массивом, содержащими объекты) сама функция в консоль выводиться не должна.
// 11. Создать функцию-конструктор для объекта, содержащего методы serProp (установить значение свойства), метод принимает ключ (строка), значение (произвольное) и объект со свойствами writable, configurable, enumerable (разрешение перезаписи свойства, разрешение перечисления свойства и разрешение удаления свойства). Если какое-то из свойств в объекте отсутствует, действие должно быть разрешено
