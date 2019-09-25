let gulp = require("gulp");

gulp.task("hello", function(done) {
    console.log("Hello :)");
    // 通知gulp工具，本任务执行完毕！
    done();
});

gulp.task("hi", function(done) {
    console.log("Hi :)");
    // 通知gulp工具，本任务执行完毕！
    done();
});

// 执行gulp时如果不指定任务名称，那么会自动默认执行default
gulp.task("default", function(done) {
    console.log("Default :)");
    // 通知gulp工具，本任务执行完毕！
    done();
});

// gulp.task("somejobs", gulp.series("hello", "hi"));
gulp.task("somejobs", gulp.series("hi", "hello"));

