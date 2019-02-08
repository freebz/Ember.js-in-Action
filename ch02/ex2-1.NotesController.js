// Listing 2.1  Synchronizing two variables using bindings

Notes.NotesController = Ember.ArrayController.extend({
  needs: ['notesNote'],
  newNoteName: null,
  selectedNoteBinding: 'controllers.notesNote.model',

  //Rest of controller left unchanged
});
