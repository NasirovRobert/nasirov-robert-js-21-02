const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 3000
    });
    gulp.watch(['./*.html', './*.css', './*.js']).on('change', browserSync.reload); // при изменении файлов перезапуск сервера
});

