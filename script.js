// Write your JavaScript code here!



window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {
       let planetIndex =  pickPlanet(listedPlanets);
       let planet = listedPlanets[planetIndex];
       console.log(planetIndex);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
    console.log(listedPlanets);
    let form = document.getElementById("launchForm");
    form.addEventListener("submit",function(event){
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let valid = formSubmission(document,listedPlanets,pilotName, copilotName, fuelLevel, cargoMass); 
    })
    
 });