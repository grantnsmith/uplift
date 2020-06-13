/* eslint-disable indent */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
 const axios = require("axios")


// POST request 


// we want to get the data array out of this function
// then we will iterate over it to get the values we need

function getApiCall() {
  var Key = "2a07eff0f6fef1c4db7b8e5ec35d37ea";
  return axios.post(`http://data.orghunter.com/v1/categories?user_key=${Key}`)
  .then((response) => {console.log(response.data.data[0])})
  .catch((error) => {console.log(error)});
  }
 
getApiCall();




// async function makeApiCall() {
//   var Key = "2a07eff0f6fef1c4db7b8e5ec35d37ea";
//   const res = await axios.post(`http://data.orghunter.com/v1/categories?user_key=${Key}`);
//   const data = res.data;
//   return data;
// }

// function getCategoryById(categoryId) {
//   data = makeApiCall();
//   data.then(value => {return value[categoryId];});
// }


// categoryDescriptionForR = getCategoryById("R");
// console.log(categoryDescriptionForR);
