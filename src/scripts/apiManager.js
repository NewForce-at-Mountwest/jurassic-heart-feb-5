// https://paleobiodb.org/data1.2/taxa/list.json?name=brontosaurus&rel=all_parents

// error handling if they search something weird

// placeholder images

// refactor searchDinos function so that it's not horrible

// refactor so you don't see the buttons once it goes into your "my-matches" category

// Function that just gets images
const getImageForDino = dinoName => {
  return fetch(
    `https://paleobiodb.org/data1.2/taxa/thumb.png?name=${dinoName}`
  );
};


// get all the dinosaur information as json
const searchDinos = dinoNameParam => {
  document.querySelector("#search-results").innerHTML = "";
  fetch(
    `https://paleobiodb.org/data1.2/taxa/list.json?name=${dinoNameParam}&rel=all_parents`
  )
    .then(dinos => dinos.json()) // convert them to a JS object
    .then(parsedDinos => {
      // if whatever comes back has a .records property with stuff in it, then do all this stuff:
      if (parsedDinos.records.length > 0) {
        // loop through the array of dino objects (parsedDino.records)
        parsedDinos.records.forEach(function(singleDino) {
          // for each dino in the loop, fetch their image as a png
          getImageForDino(singleDino.nam).then(response => {
            // check and see if the response has any status code other than a 200 range (ok)
            console.log("this is response", response)
            if(!response.ok){
               throw response;
            }
            // we don't have to do .json() because it's coming back as a .png instead of json
            printDinoCard(singleDino.nam, response.url);

          }).catch(error => {
              const imageUrl = "http://www.freakingnews.com/pictures/126000/George-Washington-Riding-a-Dinosaur--126354.jpg"
              printDinoCard(singleDino.nam, imageUrl);

          });
        });
      } else {
        handleWeirdSearchInput(parsedDinos.warnings[0]);
      }
    });
};
