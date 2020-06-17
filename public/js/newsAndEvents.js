$(() => {
  // On page load, display the news, scrape events, and save events by filter
  displayNews("popularity");
  $("#events-header").css("color", "#CBD5E0");

  // AJAX call to perform scrape server side, parameter passed in for filter
  function getScrape() {
    $.get("/scrape/")
      .then(data => {
        renderHTML(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  // When the sort button is clicked, update the button name and display the news by the requested sort
  $(document).on("click", ".dropdown-item", function(event) {
    event.preventDefault();
    $("#dropdownMenuButton").text($(this).text());
    const sortSelection = $(this).data("sort");
    displayNews(sortSelection);
  });

  // When "News" is clicked, make font bolder and display the news
  $("#news-header").on("click", () => {
    $("#dropdownMenuButton").show();
    $("#news-header").css("color", "#553827");
    $("#events-header").css("color", "#CBD5E0");
    displayNews("popularity");
  });

  // Make a get request and append the first 10 results
  function displayNews(sortRequest) {
    $.get("/api/news/" + sortRequest)
      .then(response => {
        $(".list-unstyled").remove();
        for (let i = 0; i < 10; i++) {
          const articleDate = moment(response.articles[i].publishedAt)
            .format("MMMM Do YYYY")
            .toUpperCase();
          const newArticle = `
          <ul class="list-unstyled">
            <li class="media">
              <img src=${response.articles[i].urlToImage} class="mr-3 article-image" alt="No Article Image">
              <div class="media-body">
                <h5 class="mt-0 mb-1 article-title">${response.articles[i].title}</h5>
                <p class="article-date">${articleDate}</p>
                <p class="article-description">${response.articles[i].description}</p>
                <i class="fas fa-newspaper"></i>
                <a href="${response.articles[i].url}" target="_blank" class="article-link">Full Article: ${response.articles[i].source.name}</a>
              </div>
            </li>
          </ul>`;
          $(".append-newsAndEvents").append(newArticle);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  // When "Events" is clicked, make font bolder and display the scraped events for a week by default
  $("#events-header").on("click", () => {
    $("#dropdownMenuButton").hide();
    $("#events-header").css("color", "#553827");
    $("#news-header").css("color", "#CBD5E0");
    getScrape();
  });

  // Append 10 scraped events to HTML, alert if data is 0 as scrape still in progress
  function renderHTML(data) {
    $(".list-unstyled").remove();
    for (let i = 0; i < data.length; i++) {
      let date = data[i].date;
      if (date.includes("+")) {
        date = date.split(" + ")[0];
      }
      const formattedDate = moment(date)
        .format("DD MMM")
        .toUpperCase();
      const newListItem = `
      <ul class="list-unstyled">
        <li class="media">
          <div class="calendar-box text-center">${formattedDate}</div>
          <div class="media-body">
            <h5 class="mt-0 mb-1 article-title">${data[i].title}</h5>
            <p class="article-date">${date}</p>
            <a href="${data[i].url}" target="_blank" class="article-link">Link to Eventbrite</a>
          </div>
        </li>
      </ul>`;

      $(".append-newsAndEvents").append(newListItem);
    }
  }
});
