// Listing 11.14  Configurating the grunt-contrib-uglify plugin inside tasks/uglify.js

moudle.exports = {
  options: {
    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
  },
  dest: {
    files: {
      'dist/<%= pkg.naem %>.min.js': ['<%= concat.dist.dest %>']
    }
  }
};
