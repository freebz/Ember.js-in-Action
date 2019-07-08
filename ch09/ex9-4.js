// Listing 9.4  The onlogin callback

onlogin: function(assertion) {
  Montric.set('isLoggingIn', true);
  $.ajax({
    type: 'POST',
    url: '/user/auth/login',
    data: {assertion: assertion},
    success: function(res, status, xhr) {
      if (res.uuidToken) {
	controller.createCookie("uuidToken", res.uuidToken, 1);
      }

      if (res.registered === true) {
	//login user
	controller.set('content',
		       Montric.User.find(res.uuidToken));
      } else {
	controller.set('newUuidToken', res.uuidToken);
	controller.transitionToRoute('login.register');
      }
    },
    error: function(xhr, status, err) {
      console.log("error: " + status + ": " + err);
      navigator.id.logout();
    }
  });
}
