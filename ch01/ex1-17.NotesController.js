// Listing 1.17  Adding the doDeleteNote action to the NOtesController

NOtes.NOtesController = Ember.ArrayController.extend({
    needs: ['notesNote'],

    newNoteName: null,

    actions: {
	createNewNote: function () {
	    
	    // Same as before
	},

	doDeleteNOte: function (note) {
	    this.set('noteForDeletion', note);
	    $("#confirmDeleteNoteDialog").modal({"show": true});
	},
