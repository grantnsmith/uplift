// On page load, call API and append cards for each
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
          <div class="card-body" id="charCard">
            <h5 class="card-title">${response.data[i].charityName}</h5>
            <a class="card-link" href="${response.data[i].url}" target="_blank">Link to Organization</a>
            <p class="card-text">${response.data[i].city}, ${response.data[i].state}</p>
          </div>
        </div>
      </div>`;
        $("#append-charities").append(charityCardHTML);
      }
    })
    .catch(error => {
      console.log(error.response);
    });
}

getApiCall();

// ReferenceError (value or reference can be passed in js, passing )