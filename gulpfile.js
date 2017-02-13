var
    gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    flatten = require('gulp-flatten'),
    less = require('gulp-less'),
    replace = require('gulp-replace'),
    minifyCSS = require('gulp-minify-css');

var
    minifyOpts = {
        processImport: false,
        restructuring: false,
        keepSpecialComments: 0
    },
    prefixOpts = {
        browsers: [
            'last 2 versions',
            '> 1%',
            'opera 12.1',
            'bb 10',
            'android 4'
        ]
    };

gulp.task('skins', function () {
    return gulp.src('assets/less/skins/*.less')
        .pipe(less())
        .pipe(autoprefixer(prefixOpts))
        .pipe(flatten())
        .pipe(minifyCSS(minifyOpts))
        .pipe(gulp.dest('assets/css/skins'));
});

/*
gulp.task('theme', function () {
    return gulp.src('assets/less/theme.less')
        .pipe(less())
        .pipe(gulp.dest('assets/css'));
});
*/
