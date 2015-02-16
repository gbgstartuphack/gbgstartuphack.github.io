# Landing page for Gothenburg Startup Hack 2015

## How to hack on the site

Install Sass and Compass:

	$ gem install sass compass sass-globbing

Kickoff Compass to watch changes:

	$ compass watch

Serve `index.html` locally in the browser.

## Building

Have NPM installed. Run:

	$ npm install

to install dev dependencies. We're using [gulp.js](http://gulpjs.com/) as build system.

Default gulp task builds the CSS (with `gulp-compass`) and optimizes images:

	$ gulp

*Note that it's only the 'location' and 'section' images that are optimized. Specify in `gulpfile.js`.*

These tasks are also available separately as

	$ gulp sass
	$ gulp images
