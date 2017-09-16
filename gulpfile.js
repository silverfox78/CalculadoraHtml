var gulp = require('gulp'),
    pug = require('gulp-pug2');

gulp.task('pug', function() {
    return gulp.src('pug/*.pug') // los archivos se encuentran en una carpeta llamada "pug"
        .pipe(pug({ yourTemplate: 'Locals' }))
        .pipe(gulp.dest('./')) // los archivos HTNL creados se ubicarán en la raíz del proyecto
});

gulp.task('watch', function() {
    gulp.watch('pug/includes/*.pug', ['pug']);
    gulp.watch('pug/*.pug', ['pug']);
    livereload.listen();
    gulp.watch('less/*.less', ['less']);
});

gulp.task('default', ['pug', 'watch']);