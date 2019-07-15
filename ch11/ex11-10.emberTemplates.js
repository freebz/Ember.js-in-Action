// Listing 11.10  The emberTemplates.js file

module.exports = {
  compile: {
    options: {
      templateName: function(sourceFile) {
	return sourceFile.replace(/templates\//, '');
      }
    },
    files: {
      "dist/templates.js": "templates/**/*.hbs"
    }
  }
};
