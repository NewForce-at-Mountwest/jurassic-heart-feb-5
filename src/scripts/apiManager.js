// https://paleobiodb.org/data1.2/taxa/list.json?name=brontosaurus&rel=all_parents

// get all the dinosaur information as json
const searchDinos = dinoNameParam => {
  document.querySelector("#search-results").innerHTML = "";
  fetch(
    `https://paleobiodb.org/data1.2/taxa/list.json?name=${dinoNameParam}&rel=all_parents`
  )
    .then(dinos => dinos.json()) // convert them to a JS object
    .then(parsedDinos => {
      // loop through the array of dino objects (parsedDino.records)
      parsedDinos.records.forEach(function(singleDino) {
        // for each dino in the loop, fetch their image as a png
        fetch(
          `https://paleobiodb.org/data1.2/taxa/thumb.png?name=${singleDino.nam}`
        ).then(image => {
          // we don't have to do .json() because it's coming back as a .png instead of json

          // call the dinoCard function, pass in a a name and url
          const dinoHTMLString = dinoCard(singleDino.nam, image.url);

          // put the resulting HTML string in the DOM
          document.querySelector("#search-results").innerHTML += dinoHTMLString;
        });
      });
    });
};
