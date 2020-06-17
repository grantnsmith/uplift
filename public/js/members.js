$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page with their businesses
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
    $.get("/api/member/" + data.email).then(result => {
      if (result.business.length === 0) {
        $("#append-businesses").append("No businesses found");
      } else {
        for (let i = 0; i < result.business.length; i++) {
          const newCard = `
            <div class="b-card col-sm media">
              <div class="card" style="width: 60rem;">
                <div class="card-body">
                  <h3 class="business-name">${result.business[i].name}</h3>
                  <div>
                    <ul style="list-style-type:none; padding: 0;">
                      <li class="card-text">City: ${result.business[i].city}</li>
                      <li class="card-text">Address: ${result.business[i].address}</li>
                      <li class="card-text">Phone: ${result.business[i].phone}</li>
                      <li class="card-text">Twitter: <a href=${result.business[i].twitter} target="_blank">${result.business[i].twitter}</a></li>
                      <li class="card-text">Instagram: <a href=${result.business[i].instagram} target="_blank">${result.business[i].instagram}</a></li>
                      <li class="card-text">Facebook: <a href=${result.business[i].facebook} target="_blank">${result.business[i].facebook}</a></li>
                      <li class="card-text">Website: <a href=${result.business[i].website} target="_blank">${result.business[i].website}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>`;
          $("#append-businesses").append(newCard);
        }
      }
    });
  });
});
