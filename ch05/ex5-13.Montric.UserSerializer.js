// Listing 5.13  The Montric.UserSerializer

Montric.UserSerializer = DS.RESTSerializer.extend({
  typeForRoot: function(root) {
    return root.slice(root.length-6, root.length);
  },

  normalize: function(type, hash, property) {
    var json = {};
    for (var prop : hash) {
      json[prop.camelize()] = hash[prop];
    }

    return this._super(type, json, property);
  }
});
