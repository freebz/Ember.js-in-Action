// Listing 9.1  The Montric router definition

Montric.Router.map(function() {
  this.resource("main", {path: "/"}, function() {
    this.resource("login", {path: "/login"}, function() {
      this.route("register", {path: "/register"});
      this.route("selectAccount", {path: "/select_account"});
    });
    this.route("activation");

    //The rest of the Montric router omitted
  });
});
