$(document).ready(() => {
  const businessType = $("#bus-type");
  const businessName = $("#bus-name");
  const cityName = $("#city-name");
  const submitBtn = $("#submit");

  submitBtn.on("click", event => {
    event.preventDefault();
    const category = businessType.val();
    console.log(category);
    $.get("/api/businesses/" + category, result => {
      console.log(result);
    });
  });
});
