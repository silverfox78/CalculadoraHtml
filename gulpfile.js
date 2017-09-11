var gulp = require('gulp'),
    pug = require('gulp-pug2'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');

gulp.task('pug', function() {
    return gulp.src('pug/*.pug') // los archivos se encuentran en una carpeta llamada "pug"
        .pipe(pug({ yourTemplate: 'Locals' }))
        .pipe(gulp.dest('./')) // los archivos HTNL creados se ubicarán en la raíz del proyecto
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
            // or
            // proxy: 'yourserver.dev'
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('less', function() {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
});

gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch('pug/includes/*.pug', ['pug']);
    gulp.watch('pug/*.pug', ['pug']);
    livereload.listen();
    gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['pug', 'watch', 'server']);