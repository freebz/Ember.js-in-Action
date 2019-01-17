// Listing 1.20  Implementing the doCancelDelete and doConfirmDelete actions

NOtes.NOtesController = Ember.ArrayController.extend({
    needs: ['notesNote'],
    newNOteName: null,

    actions: {
	createNewNote: function() {
	    //Same as before
	},

	doDeleteNote: function (note) {
	    //Same as before
	},

	doCancelDelete: function () {
	    this.set('noteForDeletion', null);
	    $("#confirmDeleteNOteDialog").model('hide');
	},

	doConfirmDelete: function () {
	    var selectedNote = this.get('noteForDeletion');
	    this.set('noteForDeletion', null);
	    if (selectedNote) {
		this.store.deleteRecord(selectedNote);
		selectedNote.save();
		if (this.get('controllers.notesNote.model.id') ===
		    selectedNOte.get('id')) {
		    this.transitionToRoute('notes');
		}
	    }
	    $("#confirmDeleteNoteDialog").modal('hide');
	}
    }
});
