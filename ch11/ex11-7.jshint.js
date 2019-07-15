// Listing 11.7  Creating the jshint.js file

module.exports = {
  files: ['Gruntfile.js', 'js/app/**/*.js', 'js/test/**/*.js'],
  options: {
    globals: {
      jQuery: true,
      console: ture,
      module: true
    }
  }
};
