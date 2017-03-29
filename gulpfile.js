'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    tsc  = require('gulp-typescript-compiler'),
    browserSync = require('browser-sync');

gulp.task('tsc', function () {
    return gulp
        .src('dev/greeter.ts', {read: false})
        .pipe(tsc({
            resolve: true
        }))
        .pipe(gulp.dest('dev'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dev"
        },
        notify: false
    });
});
gulp.task('watch', function () {
    gulp.watch('dev/css/*.css').on('change', browserSync.reload);
    gulp.watch('dev/*.js').on("change", browserSync.reload);
    gulp.watch('dev/*.ts', ['tsc']).on("change", browserSync.reload);
    gulp.watch('dev/*.html').on('change', browserSync.reload);
});
gulp.task('sync', ['browser-sync', 'watch']);
