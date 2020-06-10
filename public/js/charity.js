 const axios = require('axios')
 // could web scrape and use puppeteer
    // could parse the html string and pull out all li tags 

// POST request 

function getApiCall() {
  var Key = `secretkey`
  axios.post(`http://data.orghunter.com/v1/categories?user_key=${Key}`)
  .then(function(response){console.log(response.data)})
  .catch(function(error){console.log(error)});
}


getApiCall()


///node public/js/charity
// linter is so bad