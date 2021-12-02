var gulp = require('gulp'), // Gulp JS
    uglify = require('gulp-uglify-es').default, // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    rename = require('gulp-rename'), // Переименовать файл
    less = require('gulp-less'),
    cleanCSS = require('gulp-clean-css'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer');


const paths = {
    styles: './dest/less',
    styles_compiled: './assets/css',
    scripts: './dest/js',
    scripts_compiled: './assets/js',
};

//css tasks
gulp.task('styles', function () {
    return gulp.src(paths.styles+'/styles.less')
        .pipe(less(
            // plugins: [autoprefix]
        ))
        .pipe(autoprefixer('last 10 versions', 'ie 9'))
        .pipe(cleanCSS({ 
            compatibility: 'ie8',
            rebase: false
        }))
        .pipe(gulp.dest(paths.styles_compiled+'/main'));
});

gulp.task('watch_styles', function() {
    gulp.watch(paths.styles + '/styles.less', gulp.series('styles'));
    gulp.watch(paths.styles + '/blocks/*', gulp.series('styles'));
    gulp.watch(paths.styles + '/layouts/*', gulp.series('styles'));
    gulp.watch(paths.styles + '/forms/*', gulp.series('styles'));
    gulp.watch(paths.styles + '/table/*', gulp.series('styles'));
});

//js tasks
gulp.task('build_js', function (done) {
    gulp.src(paths.scripts+'/*.js')
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts_compiled+'/main'));

    done();
});