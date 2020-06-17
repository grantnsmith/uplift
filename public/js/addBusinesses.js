// when user clicks businessSubmitButton
$("#businessSubmitButton").on("click", event => {
  event.preventDefault();

  // Ensure required values are entered
  if (!$("#name").val()) {
    $("#name").addClass("is-invalid");
  }

  if (!$("#city").val()) {
    $("#city").addClass("is-invalid");
  }

  // make a newBusiness obj
  const newBusiness = {
    name: $("#name").val(),
    city: $("#city").val(),
    phone: $("#phone").val(),
    website: $("#website").val(),
    address: $("#address").val(),
    twitter: $("#twitter").val(),
    instagram: $("#instagram").val(),
    facebook: $("#facebook").val(),
    CategoryId: parseInt($("#bus-type").val())
  };

  if ($("#bus-type").val(0)) {
    $("#bus-type").addClass("is-invalid");
  }

  // Set default values to 0 if not filled out
  if (!$("#phone").val()) {
    newBusiness.phone = 0;
  }

  if (!$("#website").val()) {
    newBusiness.website = 0;
  }

  if (!$("#address").val()) {
    newBusiness.address = 0;
  }

  if (!$("#twitter").val()) {
    newBusiness.twitter = 0;
  }

  if (!$("#instagram").val()) {
    newBusiness.instagram = 0;
  }

  if (!$("#facebook").val()) {
    newBusiness.facebook = 0;
  }

  // get the email from users session, then post the values into the database and empty each input box
  $.get("/api/user_data").then(data => {
    newBusiness.createdBy = data.email;
    $.post("/api/newBusiness", newBusiness).then(() => {
      alert(`Added ${newBusiness.name} to the database!`);
      $("#name").val("");
      $("#city").val("");
      $("#phone").val("");
      $("#website").val("");
      $("#address").val("");
      $("#twitter").val("");
      $("#instagram").val("");
      $("#facebook").val("");
      $("#bus-type").val("0");
      $("#name").removeClass("is-invalid");
      $("#city").removeClass("is-invalid");
      $("#bus-type").removeClass("is-invalid");
    });
  });
});
