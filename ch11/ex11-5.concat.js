// Listing 11.5  Extracting the concat plug-in configurations into tasks/concat.js

module.exports = {
  options: {
    separator: '\n'
  },
  dest: {
    src: ['js/app/**/*.js'],
    dest: 'dist/<%= pkg.name %>.js'
  }
};
