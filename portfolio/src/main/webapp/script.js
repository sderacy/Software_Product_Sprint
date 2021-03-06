// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomFunFacts() {
  const funFacts =
      ['I play tennis!', 'Java was my first language!', 'I speak a little french and creole!', 'I love video games and anime!'];

  // Pick a random greeting.
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  // Add it to the page.
  const funFactContainer = document.getElementById('funFacts-container');
  funFactContainer.innerText = funFact;
}

async function showRandomGreets() {

  const responseFromServer = await fetch('/random-greet');
  const textFromResponse = await responseFromServer.json();

  const greetContainer = document.getElementById('greet-container');
  greetContainer.innerHTML = textFromResponse.greetMessage;

}

function createMap() {

  const map = new google.maps.Map(
      document.getElementById('map'),
      {center: {lat: 40.26109076556335, lng: -74.79750265701999}, zoom: 16});
  
  const marker = new google.maps.Marker({
    position: {lat: 40.26109076556335, lng: -74.79750265701999},
    map: map,
    
  });

  const contentString = "<b> Where I'm located <b>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

}

function loadPage() {
    showRandomGreets();
    createMap();
}