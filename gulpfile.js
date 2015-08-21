var path = require('path'),
    gutil = require('gulp-util'),
    express = require('express'),
    gulp = require('gulp'),
    livereload = require('gulp-livereload');

// The default task (called when you run `gulp` from cli)
gulp.task('default', function() {
	livereload.listen();
    gulp.watch('public/**/*').on('change', function(file){
		gutil.beep();
        gutil.log(gutil.colors.red(gutil.colors.bgYellow(path.relative(__dirname, file.path)),
            gutil.colors.red(' changed')));
        livereload.changed(file.path);
		gutil.beep();
		gutil.beep();
    });
    var app = express();
    app.use('/', express.static(__dirname + '/public'));
    var port = process.env.PORT || 3000;
	console.log('listening on port: ', port);
    app.listen(port);
});


