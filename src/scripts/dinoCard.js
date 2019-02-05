// this function expects a dinosaur name and a url for an image

// hotOrNot should be a boolean- if true, print hot or not buttons and if false print message/ cancel buttons
const dinoCard = (name, imageUrl) => {
    return `
    <div class="card" style="width: 18rem;">
    <img src=${imageUrl} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <button type="button" id="hot-btn" class="btn btn-success">Hot</button>
      <button type="button" id="not-btn" class="btn btn-danger">Not</button>
    </div>
  </div>`

  // if(hotOrNot){
    //     printButtons("Hot", "Not")
    // } else {

    // }
}

// const printButtons = (buttonOneText, buttonTwoText) => {
//  return ` `
// }



document.querySelector("#search-results").addEventListener("click", () => {
    const wholeCard =  event.target.parentNode.parentNode;
    if(event.target.id === "hot-btn"){
        console.log("You clicked on the hot button!");
        const dinoCard = wholeCard.cloneNode(true);
        document.querySelector("#my-matches").appendChild(dinoCard);
        wholeCard.remove();
    } else if (event.target.id === "not-btn"){
        console.log("you clicked on the not button!")
        wholeCard.remove()
    }
})

// function that just prints to dom
const printDinoCard = (dinoName, imageUrl) => {
    const dinoHTMLString = dinoCard(dinoName, imageUrl);

    // put the resulting HTML string in the DOM
    document.querySelector(
      "#search-results"
    ).innerHTML += dinoHTMLString;

}