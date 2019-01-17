// Listing 1.15  Adding a NotesNote controller to update the node

Notes.NotesNoteController = Ember.ObjectController.extend({
    actions: {
	updateNote: function() {
	    var content = this.get('content');
	    console.log(content);
	    if (content) {
		content.save();
	    }
	}
    }
});
