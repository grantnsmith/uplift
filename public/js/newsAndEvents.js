$(() => {
  // Display the news by popularity on page load
  displayNews("popularity");

  // When the sort button is clicked, update the button name and display the news by the requested sort
  $(document).on("click", ".dropdown-item", function(event) {
    event.preventDefault();
    $("#dropdownMenuButton").text($(this).text());
    displayNews($(this).data("sort"));
  });

  // Make a get request and append the first 10 results
  function displayNews(sortRequest) {
    $.get("/api/news/" + sortRequest).then(response => {
      $(".list-unstyled").remove();
      for (let i = 0; i < 10; i++) {
        const articleDate = moment(response.articles[i].publishedAt)
          .format("MMMM Do YYYY")
          .toUpperCase();
        const newArticle = `
          <ul class="list-unstyled">
            <li class="media">
              <img src=${response.articles[i].urlToImage} class="mr-3 article-image" alt="Missing Article Image">
              <div class="media-body">
                <h5 class="mt-0 mb-1 article-title">${response.articles[i].title}</h5>
                <p class="article-date">${articleDate}</p>
                <p class="article-description">${response.articles[i].description}</p>
                <i class="fas fa-newspaper"></i>
                <a href="${response.articles[i].url}" class="article-link">Full Article: ${response.articles[i].source.name}</a>
              </div>
            </li>
          </ul>`;
        $(".append-news").append(newArticle);
      }
    });
  }
});
