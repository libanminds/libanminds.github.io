const gulp = require("gulp");
const purgecss = require("gulp-purgecss");
const sass = require("gulp-sass");

gulp.task("css", () => {
    return gulp
        .src("src/css/main.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(purgecss({
            content: ["public/*.html"],
            whitelist: ["floating-header", "sticky-header", "primary-menu-open", "d-block"],
        }))
        .pipe(gulp.dest("public/css/"));
});
