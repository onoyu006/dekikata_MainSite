const gulp = require("gulp")
const sass = require("gulp-sass")

const browserSync = require('browser-sync')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')

const config = {
  path: {
    sass: {
    src:  'src/sass/**/*.scss',
      dist: 'dist/css'
    }
  }
}

gulp.task('style', () => {
  return gulp.src(config.path.sass.src)
  .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
  .pipe(sass({
      outputStyle: 'expanded',
      indentWidth: 2
    })
  )
  .pipe(gulp.dest(config.path.sass.dist))
})

gulp.task('watch', () => {
    gulp.watch(config.path.sass.src, gulp.parallel('style'))
})

const defaultTasks = gulp.series('watch')
gulp.task('default', defaultTasks)
