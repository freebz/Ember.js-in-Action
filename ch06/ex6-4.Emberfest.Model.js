// Listing 6.4  The find() function

Emberfest.Model = Ember.Object.extend();

Emberfest.Model.reopenClass({
  find: function(id, type) {
    var foundItem = this.contentArrayContains(id, type);

    if (!foundItem) {
      foundItem = type.create({ id: id, isLoaded: false});
      Ember.get(type, 'collection').pushObject(foundItem);
    }

    return foundItem;
  }
});
