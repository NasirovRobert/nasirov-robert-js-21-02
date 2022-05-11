const gulp = require('gulp');  // подтянули gulp
const ts = require('gulp-typescript');  //подтянули gulp-typescript
const tsProject = ts.createProject("./tsconfig.json"); //подтянули настройки проекта

gulp.task("default", function () {  // создаем дефолтную таску(будет запускаться по умолчанию при
    //вызове gulp в командной строке-терминале )
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("./dist"));
});

