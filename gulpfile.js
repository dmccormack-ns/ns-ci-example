var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("default", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});


gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task('test', ['build'], function (done) {
  // Define the Intern command line
  var command = [
    './node_modules/intern/client.js',
    'config=./dist/test/intern'
  ];

  // Add environment variables, such as service keys

  // Spawn the Intern process
  var child = require('child_process').spawn('node', command, {
    // Allow Intern to write directly to the gulp process's stdout and
    // stderr.
    stdio: 'inherit'
  });

  // Let gulp know when the child process exits
  child.on('close', function (code) {
    if (code) {
      done(new Error('Intern exited with code ' + code));
    }
    else {
      done();
    }
  });
});