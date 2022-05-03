let input = document.getElementById('inputFile');
let button = document.getElementById('buttonLoad');
let gallery = document.getElementById('gallery');
button.onclick = () => {
    if (input.files[0]) loadToImgbb(input.files[0]);
    else alert('Выберите файл');
};


let arrayImg = localStorage.getItem('arrayImg') ? JSON.parse(localStorage.getItem('arrayImg')) : [];

function loadToImgbb(input) {
    move();
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
                addToGallery([result.data.display_url]);
                stopAnimationFunc()
            })
    }
}

console.log(arrayImg);
console.log(localStorage.getItem('arrayImg'));

function addToGallery(arrayImg) {
    arrayImg.forEach(elem => {
        let imgFormArray = document.createElement('img');
        imgFormArray.src = elem;
        console.log(elem);
        console.log(imgFormArray);
        gallery.append(imgFormArray);
    })
}

addToGallery(arrayImg);


let stopAnimation;
let loader = document.getElementById('loader');
let loaderBox = loader.parentElement;
let pos = 0;

function move() {
    loaderBox.hidden = false;
    function moveLoaderLeft() {
        pos++;
        loader.style.left = pos + 'px';
        if (+getComputedStyle(loader).left.replace(/px/, '') === +getComputedStyle(loaderBox).width.replace(/px/, '') - 10) {
            stopAnimation = requestAnimationFrame(moveLoaderRight);
            return
        }
        // console.log(loader.style.left);
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

function stopAnimationFunc() {
    cancelAnimationFrame(stopAnimation); // отмена анимации
    loaderBox.hidden = true;
    pos = 0;
}







