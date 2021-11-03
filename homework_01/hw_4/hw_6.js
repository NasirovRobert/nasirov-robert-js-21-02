// Задание 1,2
const arrFib = [0, 1];
function makeFibonacci(num) {
    let i = 2;
    if (arrFib[num]) {
        return () => {
            // console.log('значение взято из кеша');
            return arrFib[num];
        }
    }
    return (function fibonacci() {
            if (num >= i) {
                arrFib[i] = arrFib[i - 1] + arrFib[i - 2];
                i++;
                fibonacci()
            }
            // console.log('значение расчитано рекурсией');
            return arrFib[num];
        }
    )
}

console.log(makeFibonacci(12)());
console.log(makeFibonacci(3)());



// Задание 3

const arr = [
    ['name', 'Anna'],
    ['age', 22],
    ['pets', [
        ['dog', 'Faust'],
        ['cat2', [
            [1, 2],
            [3, 4]
        ]],
        ['cat', 'Balthazar']
    ]]
];

function recurs(arr) {
    let obj = Object.fromEntries(new Map(arr));
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key] = recurs(obj[key]);
        }
    }
    return obj;
}

console.log(recurs(arr));