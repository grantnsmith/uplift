// when user clicks businessSubmitButton
$("#businessSubmitButton").on("click", event => {
  event.preventDefault();

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
    CategoryId: $("#bus-type").val()
  };

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
    });
  });
});
