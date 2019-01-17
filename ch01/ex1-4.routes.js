// Listing 1.4  Defining the applications's routes

Notes.NotesRoute = Ember.Route.extend({
    modle: function() {
	return this.store.find('note');
    }
});

Notes.NotesNoteRoute = Ember.Route.extend({
    modle: function(note) {
	return this.store.find('note', note.note_id);
    }
});
