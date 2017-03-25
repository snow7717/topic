var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

// 监视文件改动并重新载入
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './',
      entry:'app'
    }
  });

  gulp.watch(['*.html', 'public/static/css/*.css', 'public/static/js/*.js'], {cwd: 'app'}, reload);
});