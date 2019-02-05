document.querySelector("#search-btn").addEventListener("click", () => {
    // get the user's input
    const searchTerm = document.querySelector("#dino-search-bar").value;
    // log it to the console
    searchDinos(searchTerm);
})