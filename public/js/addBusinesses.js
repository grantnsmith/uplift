// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks businessSubmitButton
$("#businessSubmitButton").on("click", event => {
  event.preventDefault();

  // make a newBusiness obj
  const newBusiness = {
    name: $("#name")
      .val()
      .trim(),
    city: $("#city")
      .val()
      .trim(),

    phone: $("#phone")
      .val()
      .trim(),
    email: $("#email").val(),
    website: $("#website").val(),
    about: $("about").val(),

    twitter: $("#twitter")
      .val()
      .trim(),
    instagram: $("#instagram")
      .val()
      .trim(),
    facebook: $("#facebook")
      .val()
      .trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newBusiness)
    // on success, run this callback
    .then(data => {
      // log the data we found
      console.log(data);
      // tell the user we're adding a character with an alert window
      alert("Adding business...");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#city").val("");
  $("#phone").val("");
  $("#email").val("");
  $("#website").val("");
  $("#about").val("");
  $("#twitter").val("");
  $("#instagram").val("");
  $("#facebook").val("");
});
