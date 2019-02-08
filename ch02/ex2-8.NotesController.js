// Listing 2.8  Observing changes within arrays using @each

Notes.NotesController = Ember.ArrayController.extend({
  content: [],
  nameObserver: function() {
    //The content of the oberver
  ).observes('content.@each.name')
});
