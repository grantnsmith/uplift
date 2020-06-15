/* eslint-disable indent */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */

// On page load, call API and append cards for each
getApiCall();

function getApiCall() {
  $.ajax({
    type: "GET",
    url: "/api/charities"
  })
  .then(response => {
    for (let i = 0; i < 20; i++) {
      const charityCardHTML = `
      <div class="col mb-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${response.data[i].charityName}</h5>
            <a class="card-text" href="${response.data[i].url}" target="_blank">Link to Organization</a>
            <p class="card-text">${response.data[i].city}, ${response.data[i].state}</p>
          </div>
        </div>
      </div>`
      $("#append-charities").append(charityCardHTML);
    }

  });
}
