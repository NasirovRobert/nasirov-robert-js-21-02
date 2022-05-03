import {addToGallery, arrayImg} from '../addtogallery/addToGallery.js';
import {move, stopAnimationFunc} from '../loader/move.js';

// Загрузка на сервер
export function loadToImgbb(input) {
    move(); //запуск анимации лоадера
    let reader = new FileReader();
    reader.readAsDataURL(input);
    reader.onload = () => {
        let formData = new FormData();
        formData.append('key', '3f05d00fbb955dd19e1d39c44caf840b');
        formData.append('image', reader.result.replace(/^.*,/, ''));
        fetch('https://api.imgbb.com/1/upload', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(result => {
                arrayImg.push(result.data.display_url);
                localStorage.setItem('arrayImg', JSON.stringify(arrayImg));
                addToGallery([result.data.display_url]); // вызов функции добавления в галерею
                stopAnimationFunc()
            })
    }
}