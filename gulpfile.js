var gulp = require("gulp")
var compass = require("gulp-compass")
var images = require('gulp-imagemin')

gulp.task("default", ["images", "sass"], function() {

})

gulp.task("sass", function() {
	gulp.src( ["stylesheets/*.scss"] )
		.pipe(compass({
			image: "build/images",
			css: "build/css",
			font: "fonts",
			sass: "stylesheets",
			style: "compressed"
		}))
})

gulp.task("images", function(){
	gulp.src(["images/sections/*.jpg", "images/location/*.jpg", "images/*.png"])
		.pipe(images({
			progressive: true
		}))
		.pipe(gulp.dest("build/images"))
})
