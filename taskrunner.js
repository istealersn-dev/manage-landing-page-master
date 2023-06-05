const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass compilation
function sassCompile() {
	return src('src/sass/main.scss', { sourcemaps: true})
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(dest('dist/css', { sourcemaps: 'map'}));
}

// Javascript compilation & bundling
function jsCompile() {
	return src('src/js/*')
		.pipe(babel({ presets: ['@babel/preset-env'] }))
		.pipe(concat('master.js'))
		.pipe(uglify())
		.pipe(terser())
		.pipe(dest('dist/js'));
}

// Browser sync setup
function browserSyncservice(callback) {
	browsersync.init({
		server: {
			baseDir: '.',
		},
		notify: {
			styles: {
				top: 'auto',
				bottom: '0',
			},
		},
	});
	callback();
}

// Browser sync reload
function browserSyncReload(callback) {
	browsersync.reload();
	callback();
}

// Watch for HTML change to sync the browser
function watchHtml() {
	watch('*.html', browserSyncReload);
	watch(
		['src/sass/**/*.scss'],
		series(sassCompile, browserSyncReload)
	);
	watch(
		['src/js/*.js'],
		series(jsCompile, browserSyncReload)
	);
}

// Default
exports.default = series(sassCompile, jsCompile, browserSyncservice, watchHtml);