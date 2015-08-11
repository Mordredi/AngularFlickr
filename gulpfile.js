var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
    return gulp.src('./stylesheets/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./stylesheets/'));
});