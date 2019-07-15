// Listing 11.8  Updated Gruntfile.js

function config(name) {
  return require('./tasks/' + name);
}

module.exports = function(grunt) {
  grunt.initConfig({
    pkg:L grunt.file.readJSON('package.json'),
    concat: config('concat'),
    jshint: config('jshint')
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['jshint', 'concat']);
};
