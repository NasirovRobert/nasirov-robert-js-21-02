const gulp = require('gulp');  // подтянули gulp
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const watchify = require("watchify");  // подтянули watchify
const tsify = require("tsify");
const fancy_log = require("fancy-log"); // подтянули fancy-log
const browserSync = require('browser-sync').create();  // подключаем browserSync
const paths = {
    pages: ["src/*.html", "src/*.css"],
};

gulp.task('copy-file', function () {  //Задача копирования .html из src в dist
    return gulp.src(paths.pages).pipe(gulp.dest('./dist'));
});


gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        port: 3000
    });
    gulp.watch(['./dist/*']).on('change', browserSync.reload); // при изменении файлов в dist перезапуск сервера
    gulp.watch(['./src/*.html', './src/*.css']).on('change', gulp.series('copy-file')); // при
    //изменении html и css файлов в src, запустится задача copy-file и скопирует файлы в dist
    //тем самым запустит предыдущий watch и перезапустит сервер
});

const watchedBrowserify = watchify( // Обёртка для слежения за изменениями ts
    browserify({
        basedir: ".",
        debug: true, // Включаем отладку
        entries: ["src/main.ts"], // Фалйы для обработки
        cache: {},
        packageCache: {},
    }).plugin(tsify)
);

function bundle() {
    return watchedBrowserify
        .bundle() //объединит все модули в один файл
        .on('error', fancy_log) // Логирование при ошибках
        .pipe(source("bundle.js"))  //адаптирует файл, выводимый Browserify,
        // обратно в формат, который понимает gulp
        .pipe(gulp.dest("./dist")); // Путь к выходному файлу
}

gulp.task(
    "default",
    gulp.series(gulp.parallel("copy-file"), bundle)
);

watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);
