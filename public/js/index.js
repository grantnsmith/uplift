$(document).ready(() => {
  const businessType = $("#bus-type");
  const businessName = $("#bus-name");
  const cityName = $("#city-name");
  const submitBtn = $("#submit");

  //When submit button is clicked - NEED TO CREATE CASES FOR EACH
  submitBtn.on("click", event => {
    event.preventDefault();
    const category = parseInt(businessType.val());
    console.log(category);
    getBusinessesByCategory(category);
  });

  //Make a get request for businesses by category
  function getBusinessesByCategory(category) {
    $.get("/api/businesses/" + category, result => {
      console.log(result);
    });
  }
});
