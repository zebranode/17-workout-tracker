import devTag from './app.js';
$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("#login");
  var userInput = $("input#username");
  var passwordInput = $("input#password");

  // When the form is submitted, we validate there's an username and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      username: userInput.val().trim(),
      password: passwordInput.val().trim()
    };
    if (!userData.username || !userData.password) {
      return;
    }

    // If we have an username and password we run the loginUser function and clear the form
    loginUser(userData.username, userData.password);
    userInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, password) {
    $.post("/api/users/signin", {
      username: username,
      password: password
    })
      .then(function() {
        window.location.replace("/home");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
  //reveal page HTML (happening now to avoid flash of unstyled content)
  $("body").css({"opacity": "1"});
  //dev tag    
  devTag();
});
