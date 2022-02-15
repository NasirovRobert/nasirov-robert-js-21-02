// Добавление строки, валидируемые инпуты
const inputName = document.querySelector('#add-new-tr__input-name-id');
const inputPhone = document.querySelector('#add-new-tr__input-phone-id');
let inputNameValue = '';
let inputPhoneValue = '';

function handleInputName(e) {
    if (/^[А-я]*$/.test(e.target.value)) {
        inputNameValue = e.target.value;
    }
}

function handleInputPhone(e) {
    if (/^[0-9]*$/.test(e.target.value)) {
        inputPhoneValue = e.target.value;
    }
}

inputName.addEventListener('input', handleInputName);
inputName.addEventListener('input', () => inputName.value = inputNameValue);

inputPhone.addEventListener('input', handleInputPhone);
inputPhone.addEventListener('input', () => inputPhone.value = inputPhoneValue);


const button = document.querySelector('.add-new-tr__button');

button.addEventListener('click', addNewTr);

function addNewTr() {
    if (inputName.value.length > 0 && inputPhone.value.length > 0) {
        const newTr = document.createElement('tr');
        newTr.innerHTML = `<td class="table__td">${inputName.value}</td><td class="table__td">${inputPhone.value}</td><td class="table__remove"><button class="table__button-remove">Удалить пользователя</button></td>`;
        document.querySelector('.table__tbody').append(newTr);
        inputName.value = '';
        inputPhone.value = '';
        inputNameValue = '';
        inputPhoneValue = '';

    }
}
// Удаление строки
const table = document.querySelector('.table');
const caption = document.querySelector('.table__caption');

table.addEventListener('click', removeTr);

function removeTr(e) {
    if (e.target.classList.contains('table__button-remove')){
        e.target.parentNode.parentNode.remove();
    }
}

// Изменение цвета таблицы

document.querySelector('.color-change__button').addEventListener('click', changeColor);
function changeColor() {
    table.setAttribute('bgcolor',`${document.querySelector('.color-change__input').value}`);
}

document.querySelector('.color-change-caption__button').addEventListener('click', changeColorCaption);
function changeColorCaption() {
    caption.style.backgroundColor = document.querySelector('.color-change-caption__input').value;
}

document.querySelector('.color-change-text__button').addEventListener('click', changeColorText);
function changeColorText() {
    table.style.color = document.querySelector('.color-change-text__input').value;
}


