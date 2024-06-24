const gulp = require('gulp');
const concat = require('gulp-concat');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/*.{woff,woff2}')
        .pipe(gulp.dest('dist/fonts'));
})

gulp.task('css', () => {
    return gulp.src('src/css/*.css')
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('img', () => {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('dist/img'));
});

gulp.task('data', () => {
    return gulp.src('src/data/*.json')
        .pipe(gulp.dest('dist/data'));
});

gulp.task('js', () => {
    return gulp.src('src/js/*.js')
        .pipe(webpack({
            mode: 'production',
            devtool: 'source-map',
            output: {
                filename: 'app.js',
            }
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());

});



gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload);
    gulp.watch('src/css/*.css', gulp.series('css'))
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('src/data/*.json', gulp.series('data')).on('change', browserSync.reload);;

});

gulp.task('default', gulp.series('html', 'fonts', 'css', 'img', 'data', 'js', 'watch'));