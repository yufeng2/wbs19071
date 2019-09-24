/*
    文件目录的拷贝和删除
*/

let gulp = require("gulp");

// 发布：distribution
// 目标：destination

let app = {
    src: "./src",
    dist: "./dist"
}

// 实现src拷贝至dist/src
gulp.task("copy1", function(done) {
    // gulp.src(app.src)               // 只会拷贝src目录
    // gulp.src(app.src + "/*")            // 只会拷贝src目录下的一级内容（子文件夹内容没有，src目录没有创建）
    // gulp.src(app.src + "/**")            // 会拷贝src目录下的所有内容（src目录没有创建）

    gulp.src(app.src)
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/**")
        .pipe(gulp.dest(app.dist + "/src"));

    done();
});

// 实现选择拷贝
gulp.task("copy2", function(done) {
    gulp.src(app.src + "/js")
        .pipe(gulp.dest(app.dist));
    gulp.src(app.src + "/css")
        .pipe(gulp.dest(app.dist));

    gulp.src(app.src + "/js/**")
        .pipe(gulp.dest(app.dist + "/js"));
    gulp.src(app.src + "/css/**")
        .pipe(gulp.dest(app.dist + "/css"));

    done();
});

// []组合：实现一组指定内容
// !剔除：不需要的内容
gulp.task("copy3", function(done) {
    gulp.src([`${app.src}/*`, `!${app.src}/js`, `!${app.src}/css`])
        .pipe(gulp.dest(app.dist));

    done();
});

// 只要导出项目中的所有页面
// 方法一：
gulp.task("copy4", function(done) {
    gulp.src([`${app.src}/**/*.html`, `${app.src}/**/*.htm`])
        .pipe(gulp.dest(app.dist));

    done();
});

// 方法二：
// 枚举{}：指定的几个值
gulp.task("copy4", function(done) {
    gulp.src(`${app.src}/**/*.{htm,html}`)
        .pipe(gulp.dest(app.dist));

    done();
});

// 实现删除功能

// npm i gulp-clean --save-dev

// 导入第三方组件
let clean = require("gulp-clean");

// 删除内容（保留目录）
gulp.task("clean1", function(done) {
    gulp.src(app.dist + "/*")       // 这里不要使用/**（仅在copy子目录内容时使用）
        .pipe(clean());

    done();
});

// 删除目录
gulp.task("clean2", function(done) {
    gulp.src(app.dist)
        .pipe(clean());

    done();
});

// 选择删除
gulp.task("clean3", function(done) {
    // gulp.src([`${app.dist}/**/*.html`, `${app.dist}/**/*.htm`])
    gulp.src(`${app.dist}/**/*.{htm,html}`)
        .pipe(clean());

    done();
});
