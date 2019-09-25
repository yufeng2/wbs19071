let gulp = require("gulp");
let clean = require("gulp-clean");
let less = require("gulp-less");
let cssmin = require("gulp-cssmin");
let rename = require("gulp-rename");
let concat = require("gulp-concat");
let { default: uglify } = require("gulp-uglify-es");

let app = {
    fonts_src: "./node_modules/bootstrap/fonts/*",
    less: "./node_modules/bootstrap/less/bootstrap.less",
    js: [
        './node_modules/bootstrap/js/transition.js',
        './node_modules/bootstrap/js/alert.js',
        './node_modules/bootstrap/js/button.js',
        './node_modules/bootstrap/js/carousel.js',
        './node_modules/bootstrap/js/collapse.js',
        './node_modules/bootstrap/js/dropdown.js',
        './node_modules/bootstrap/js/modal.js',
        './node_modules/bootstrap/js/tooltip.js',
        './node_modules/bootstrap/js/popover.js',
        './node_modules/bootstrap/js/scrollspy.js',
        './node_modules/bootstrap/js/tab.js',
        './node_modules/bootstrap/js/affix.js'
    ],
    dist: "./dist"
}

gulp.task("clean", function(done) {
    gulp.src(app.dist)
        .pipe(clean());

    done();
});

gulp.task("fonts", function(done) {
    gulp.src(app.fonts_src)
        .pipe(gulp.dest(`${app.dist}/bootstrap/fonts`));

    done();
});

gulp.task("css", function(done) {
    gulp.src(app.less)
        .pipe(less())
        .pipe(cssmin())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest(`${app.dist}/bootstrap/css`));

    done();
});

gulp.task("js", function(done) {
    gulp.src(app.js)
        .pipe(concat("bootstrap.js"))
        .pipe(uglify())
        .pipe(rename("bootstrap.min.js"))
        .pipe(gulp.dest(`${app.dist}/bootstrap/js`));

    done();
});

gulp.task("default", gulp.series("fonts", "css", "js"));