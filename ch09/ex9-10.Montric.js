// Listing 9.10  Haiting and resuming application initialization

Montric.deferReadiness();

$.getJSON("/user", function(data) {
  if (data["user"] && data["user"].userRole != null) {
    var cookieUser = Montric.User.create();
    cookieUser.setProperties(data["user"]);
    Montric.set('cookieUser', cookieUser);
  } else {
    Montric.set('cookieUser', null);
  }

  Montric.advanceReadiness();
});
