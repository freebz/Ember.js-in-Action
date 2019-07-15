// Listing 11.12  Concatenating the precompiled templates into Montric.js

module.exports = {
  options: {
    separator: '\n'
  },
  dist: {
    src: ['js/app/**/*.js', 'dist/templates.js'],
    dest: 'dist/<%= pkg.name %>.js'
  }
};
