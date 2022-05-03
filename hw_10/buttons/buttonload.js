import {loadToImgbb} from '../loadtoimgbb/loadToImgbb.js';
let input = document.getElementById('inputFile');
let button = document.getElementById('buttonLoad');
//Кнопка загрузки
button.onclick = () => {
    if (input.files[0]) loadToImgbb(input.files[0]);
    else alert('Выберите файл');
};