import conf from '../config.json';
import gulp from 'gulp';
import webpack from 'gulp-webpack';
import eslint from 'gulp-eslint';
import webpackConfig from '../webpack.conf';

/*
gulp.task('js:riot',()=>{
  'use strict';
  return gulp.src([conf.base.src + conf.files.tag])
  .pipe(riot({
    template: 'jade'
  }))
  .pipe(gulp.dest(conf.base.tmp));
})
*/

gulp.task('js:build', function() {
  'use strict';
  return gulp.src
  ([conf.base.src + conf.files.js,
    // conf.base.src + conf.files.tag
    // conf.base.tmp + conf.files.js
  ])
  .pipe(eslint({configFile: './.eslintrc.json'}))
  .pipe(eslint.format())
  .pipe(webpack(webpackConfig))
  .pipe(gulp.dest(conf.base.build + conf.path.js));
});
