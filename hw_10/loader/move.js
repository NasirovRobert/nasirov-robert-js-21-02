//Инициализыция параметров для анимации
let stopAnimation;
let loader = document.getElementById('loader');
let loaderBox = loader.parentElement;
let pos = 0;


//функция запуска анимации
export function move() {
    loaderBox.hidden = false;
    function moveLoaderLeft() {
        pos++;
        loader.style.left = pos + 'px';
        if (+getComputedStyle(loader).left.replace(/px/, '') === +getComputedStyle(loaderBox).width.replace(/px/, '') - 10) {
            stopAnimation = requestAnimationFrame(moveLoaderRight);
            return
        }
        stopAnimation = requestAnimationFrame(moveLoaderLeft);
    }

    function moveLoaderRight() {
        pos--;
        loader.style.left = pos + 'px';
        if (+getComputedStyle(loader).left.replace(/px/, '') === 0) {
            stopAnimation = requestAnimationFrame(moveLoaderLeft);
            return
        }
        // console.log(loader.style.left);
        stopAnimation = requestAnimationFrame(moveLoaderRight);
    }

    moveLoaderLeft();

}

//Функция остановки анимации
export function stopAnimationFunc() {
    cancelAnimationFrame(stopAnimation); // отмена анимации
    loaderBox.hidden = true;
    pos = 0;
}