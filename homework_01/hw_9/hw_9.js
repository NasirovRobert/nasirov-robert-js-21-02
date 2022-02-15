const firstNumber = document.getElementById('exercise-one__input_number1');
const secondNumber = document.getElementById('exercise-one__input_number2');
const buttonNumber = document.getElementById('exercise-one__button');
const thirdNumber = document.getElementById('exercise-one__input_number3');
const fourthNumber = document.getElementById('exercise-one__input_number4');
const secondButtonNumber = document.getElementById('exercise-one__button2');

// -------------Валидация формы----------

class inputValueObj {
    constructor(input) {
        this.input = input;
        this.value = '';
        this.input.addEventListener('input', this.handleInput);
        this.input.addEventListener('input', this.writeInput);
    }

    handleInput = (elem) => {
        if (/^[0-9]*$/.test(elem.target.value)) {
            this.value = elem.target.value;
        }
    };
    writeInput = (elem) => {
        elem.target.value = this.value;
    };
}


// -------------Через setTimeout------------------

const obj1 = new inputValueObj(firstNumber);
const obj2 = new inputValueObj(secondNumber);

buttonNumber.onclick = () => {
    if ((obj1.value && obj2.value) && (Number(obj1.value) > Number(obj2.value))) {
        let i = obj2.value;
        setTimeout(function f1() {
            console.log(i++);
            if (i <= obj1.value) {
                setTimeout(f1, 1000);
            }
        }, 1000)
    } else if ((obj1.value && obj2.value) && (Number(obj1.value) <= Number(obj2.value))) {
        console.log('Второе число должно быть меньше первого')
    } else {
        console.log('Введите оба числа')
    }
};

// -------------Через setInterval------------------

const obj3 = new inputValueObj(thirdNumber);
const obj4 = new inputValueObj(fourthNumber);

secondButtonNumber.onclick = () => {
    if ((obj3.value && obj4.value) && (Number(obj3.value) > Number(obj4.value))) {
        let i = obj4.value;
        let timerId = setInterval(function f1() {
            console.log(i++);
            if (i > obj3.value) {
                clearInterval(timerId)
            }
        }, 1000)
    } else if ((obj3.value && obj4.value) && (Number(obj3.value) <= Number(obj4.value))) {
        console.log('Второе число должно быть меньше первого')
    } else {
        console.log('Введите оба числа')
    }
};

// ----------Переход на maxima.life----------
const buttonToMaxima = document.getElementById('exercise-two__button');
buttonToMaxima.addEventListener('click', goToMaxima);

function goToMaxima() {
    const exerciseTwoP = document.createElement('p');
    exerciseTwoP.innerHTML = `Вы будете перенаправлены через <span style="color: #78ff58">10</span> секунд`;
    buttonToMaxima.after(exerciseTwoP);
    let i = 10;
    let timerId = setInterval(function f1() {
        i = i - 1;
        if (i == 4 || i == 3 || i == 2) {
            exerciseTwoP.innerHTML = `Вы будете перенаправлены через <span style="color: red">${i}</span> секунды`;
        } else if (i == 1) {
            exerciseTwoP.innerHTML = `Вы будете перенаправлены через <span style="color: red">${i}</span> секунду`;
        } else if (i == 0) {
            exerciseTwoP.innerHTML = `Вы будете перенаправлены через <span style="color: red">${i}</span> секунд`;
            clearInterval(timerId);
            window.location = 'https://maxima.life';
        } else {
            exerciseTwoP.innerHTML = `Вы будете перенаправлены через <span style="color: red">${i}</span> секунд`;
        }

    }, 1000);
}

// ------------Таблица SWAPI------------------
const table = document.getElementById('table');
const tbody = document.getElementById('tbody');
const last = document.getElementById('last');
const next = document.getElementById('next');

fetch('https://swapi.dev/api/people/')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(result => {
        console.log(result);
        let array = result.results;
        array.forEach(elem => {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${elem.name}</td><td>${elem.height}</td><td>${elem.mass}</td><td>${elem.gender}</td>`;
            tbody.append(tr)
        });
        if (result.previous == null) {
            last.style.color = 'red';
        }
        next.onclick = () => {
            if (result.next != null) {
                newTable(result.next)
            }
        };
    });

function newTable(url) {
    tbody.innerHTML = '';
    fetch(url).then(response => response.json())
        .then(result => {
            let array = result.results;
            array.forEach(elem => {
                let tr = document.createElement('tr');
                tr.innerHTML = `<td>${elem.name}</td><td>${elem.height}</td><td>${elem.mass}</td><td>${elem.gender}</td>`;
                tbody.append(tr)
            });
            if (result.next == null) {
                next.style.color = 'red';
            } else {
                next.style.color = 'black';
            }
            if (result.previous == null) {
                last.style.color = 'red';
            } else {
                last.style.color = 'black';
            }
            next.onclick = () => {
                if (result.next != null) {
                    newTable(result.next)
                }
            };
            last.onclick = () => {
                if (result.previous != null) {
                    newTable(result.previous)
                }
            };
        })
}


const sort1 = document.getElementById('sort1');
const sort2 = document.getElementById('sort2');
const sort3 = document.getElementById('sort3');
const sort4 = document.getElementById('sort4');

sort1.addEventListener('click', ()=> sortName('name'));
sort2.addEventListener('click', ()=> sortName('height'));
sort3.addEventListener('click', ()=> sortName('mass'));
sort4.addEventListener('click', ()=> sortName('gender'));


function byField(field) {
    if (field === 'name' || field === 'gender') {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }
    else if (field === 'height' || field === 'mass') {
        return (a, b) =>  a[field] - b[field];
    }
}

function sortName(par) {
    let newArrFromTable = [];
    for (let key of tbody.children) {
        newArrFromTable.push({
            'name': key.children[0].innerHTML, 'height': key.children[1].innerHTML,
            'mass': key.children[2].innerHTML, 'gender': key.children[3].innerHTML
        })
    }
    newArrFromTable.sort(byField(par));
    console.dir(newArrFromTable);
    tbody.innerHTML = '';
    newArrFromTable.forEach(elem => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<td>${elem.name}</td><td>${elem.height}</td><td>${elem.mass}</td><td>${elem.gender}</td>`;

        tbody.append(tr)
    });

}






