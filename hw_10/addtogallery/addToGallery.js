
let gallery = document.getElementById('gallery');

//Начальная инициализация массива картинок
export let arrayImg = localStorage.getItem('arrayImg') ? JSON.parse(localStorage.getItem('arrayImg')) : [];

//Функция добавления в галерею
export function addToGallery(arrayImg) {
    arrayImg.forEach(elem => {
        let imgFormArray = document.createElement('img');
        imgFormArray.src = elem;
        console.log(elem);
        console.log(imgFormArray);
        gallery.append(imgFormArray);
    })
}

//инициализация картинок из localstorage
addToGallery(arrayImg);