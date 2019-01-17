// Listing 1.3  Defining the application's router

Notes.Router.map(function () {
    this.resource('notes', (path: "/"), function() {
	this.route('note', (path: "/note/:note_id"));
    });
});
