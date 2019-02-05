// function that just prints error messages
const handleWeirdSearchInput = (warningMessage) => {
    // if it doesn't have a .records property, print an error message
    document.querySelector(
      "#search-results"
    ).innerHTML = `<div class="jumbotron">
  <h1 class="display-4">Not Found</h1>
  <p class="lead">${warningMessage}</p>
  <hr class="my-4">
  <p>Please try something else, like "tyrannosaurus" or "brontosaurus"</p>
</div>`;

}
