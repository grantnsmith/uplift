$(document).ready(() => {
  const businessType = $("#bus-type");
  const cityName = $("#city-name");
  const submitBtn = $("#submit");

  //When submit button is clicked - NEED TO CREATE CASES FOR EACH
  submitBtn.on("click", event => {
    event.preventDefault();
    const category = parseInt(businessType.val());
    const city = cityName.val();
    if (city === null && category === 0) {
      alert("You must make at least one selection in order to search.");
    } else if (city === null && category > 0) {
      getBusinessesByCategory(category);
    } else if (city !== null && category === 0) {
      getBusinessesByCity(city);
    } else {
      getBusinessesByCityAndCategory(city, category);
    }
  });

  //Make a GET request for businesses by category
  function getBusinessesByCategory(category) {
    $.get("/api/businesses/" + category, result => {
      console.log(result);
      $(document.body).html(result);
      document.querySelector("#index-business-cards").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  //Make a GET request for businesses by city
  function getBusinessesByCity(city) {
    $.get("/api/city/" + city, result => {
      $(document.body).html(result);
      document.querySelector("#index-business-cards").scrollIntoView({
        behavior: "smooth"
      });
    });
  }

  // //Make a GET request for businesses by city AND category
  function getBusinessesByCityAndCategory(city, category) {
    $.get("/api/cityandcategory/" + city + "/" + category, result => {
      $(document.body).html(result);
      document.querySelector("#index-business-cards").scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
