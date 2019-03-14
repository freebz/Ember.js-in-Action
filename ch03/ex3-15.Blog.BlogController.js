// Listing 3.15  Using the needs property to connect controllers

Blog.BlogController = Ember.ArrayController.extend({

});

Blog.BlogIndexController = Ember.ObjectController.extend({
  needs: ['blog']
});
