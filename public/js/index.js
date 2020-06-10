$(document).ready(() => {
  const businessType = $("#bus-type");
  const cityName = $("#city-name");
  const submitBtn = $("#submit");

  //When submit button is clicked - NEED TO CREATE CASES FOR EACH
  submitBtn.on("click", event => {
    event.preventDefault();
    //ADD CASE HERE
    const category = parseInt(businessType.val());
    console.log(category);
    getBusinessesByCategory(category);
    //ADD CASE HERE
    const city = cityName.val();
    console.log(city);
    getBusinessesByCity(city);
  });

  //Make a GET request for businesses by category
  function getBusinessesByCategory(category) {
    $.get("/api/businesses/" + category, result => {
      console.log(result);
    });
  }

  //Make a GET request for businesses by city **** NEED TO UPDATE DB
  function getBusinessesByCity(city) {
    $.get("/api/businesses/" + city, result => {
      console.log(result);
    });
  }
});
