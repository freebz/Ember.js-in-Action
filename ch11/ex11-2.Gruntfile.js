// Listing 11.2  The initial Gruntfile.js

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  });

  // Default task(s).
  grunt.registerTask('default', []);

};
