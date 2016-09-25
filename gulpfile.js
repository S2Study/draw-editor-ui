// gulpfile.js

const gulp = require('gulp');
const babel = require('gulp-babel');
const merge2 = require('merge2');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var cssnext = require('postcss-cssnext');
const tsConfig = {
	target: 'es6',
	declaration:true,
	moduleResolution: "node",
	jsx: "react"
};
function doCompile(src,dest){
	let tsResult = gulp
		.src(src)
		.pipe(sourcemaps.init())
		.pipe(typescript(tsConfig));
	return merge2([
		tsResult.dts.pipe(gulp.dest(dest)),
		tsResult.js
			.pipe(babel({ presets: ['stage-3', 'es2015'] }))
			.pipe(sourcemaps.write(".",{
				includeContent: true,
				sourceRoot: '.'
			}))
			.pipe(gulp.dest(dest))
	]);
}
gulp.task('compile-lib', () => {
		return doCompile(['src/**/*.ts','src/**/*.tsx', 'typings/**/*.d.ts'], 'lib');
});
gulp.task('compile',['compile-lib','scss'], ()=>{
		return doCompile(['index.ts','typings/**/*.d.ts'],'.');
});
gulp.task('default', ['compile']);
gulp.task('scss', function() {
	var processors = [
		cssnext()
	];
	return gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(postcss(processors))
		.pipe(gulp.dest('lib'))
});
