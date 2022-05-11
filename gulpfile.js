const gulp = require('gulp'); // подключаем  gulp
const rename = require('gulp-rename'); // добавляем плагин npm 1.install --save-dev gulp-rename
// const sass = require('gulp-sass'); // добавляем плагин npm 1.install --save-dev gulp-sass
const sass = require('gulp-sass')(require('sass'));//добавляем плагин npm 1.install sass gulp-sass --save-dev
const autoprefixer = require('gulp-autoprefixer');//npm 1.install --save-dev gulp-autoprefixer
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();  //npm 1.install browser-sync gulp --save-dev

function css_style(done) {
    gulp.src('./scss/**/*.scss') //src() - открытие файла, берём файл и с ним работаем
        .pipe(sourcemaps.init()) // включаем sourcemaps
        .pipe(sass({  //конвертации sass в css
            errorLogToConsole: true, // включить отлов ошибок
            outputStyle: 'compressed' //минимизируем css
        }))
        .on('error', console.error.bind(console)) //обработчик события - по событию 'error'
        //отлавливаем ошибки и  выводим их в консоль
        .pipe(autoprefixer({
            cascade: false,
            browsers: ['last 2 versions']
        })) // автопрефиксы для разных браузеров
        .pipe(rename({suffix: '.min'}))  // переименовать файл
        .pipe(sourcemaps.write('./')) //записываем данные в sourcemaps
        .pipe(gulp.dest('./css/')) //pipe() -задача выполняется последовательно
        //dest()  - копировать
        .pipe(browserSync.stream()); //обращаемся в BrowserSync и записываем новые изменения в него
    done();  // любой task надо закончить вызовом оператора, переданного в функцию таска
}

function BrowserSync(done) {
    browserSync.init({
        server: {
            baseDir: './' //указываем что будет отслеживаться
        },
        port: 3000 //указываем порт
    });
    done()
}

function BrowserReload(done) {
    browserSync.reload(); //перезагрузка браузера
    done();
}

function print(done) {
    console.log('hi');
    done()
}

function watchSass() { // в watchSass не надо вставлять параметр, а в конце функции не надо вызывать его
    gulp.watch('./scss/**/*', css_style); //запускает задачу-2-ой параметр, когда происходит изменение в файлах -1-ый пар-р
    // gulp.watch('./js/**/*', js_style);
} //** - все папки в папке scss, /**/* - все файлы

function watchFiles() {
    gulp.watch('./scss/**/*', css_style);
    gulp.watch('./**/*.html', BrowserReload);
    gulp.watch('./**/*.php', BrowserReload);
    gulp.watch('./**/*.js', BrowserReload);
    gulp.watch('./**/*.css', BrowserReload); //добавил слежение за css
}


// gulp.task('default', gulp.series(BrowserSync, watchSass)); //выполнение задач последовательно
gulp.task('default', gulp.parallel(BrowserSync, watchFiles));// чтобы закончить watch задачу нужно ввести в консоле ctrl+c
gulp.task(BrowserSync);
//таски выполняются единоразово, а watch повторяются постоянно

// gulp.task(css_style);
// gulp.task(print);


// function defaultTask(cb) {
//     console.log('Hello world');
//     cb();
// }
//
//
// function printHello(cb) {
//     console.log('Hello');
//     cb();
// }


// gulp.task(printHello);
// gulp.task('default', defaultTask);


// exports.default = defaultTask;
// exports.printHello = printHello;