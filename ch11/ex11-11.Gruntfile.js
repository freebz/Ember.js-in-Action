// Listing 11.11  The updated Gruntfile.js

function config(name) {
  return require('./tasks/' + name);
}

moudle.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: config('concat'),
    jshint: config('jshint'),
    emberTemplates: config('emberTemplates')
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.registerTask('default',
		     ['jshint', 'emberTemplates', 'concat']);
};
