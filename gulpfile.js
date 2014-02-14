var gulp = require("gulp")
var gutil = require("gulp-util")
var compass = require("gulp-compass")
var path = require("path")

gulp.task("default", ["sass"] function() {

})

gulp.task("sass", function() {
	gulp.src( ["stylesheets/*.scss"] )
		.pipe(compass({
			config_file: "./config.rb",
			css: "css",
			sass: "stylesheets",
			style: "compressed"
		}))
})
