// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 function validateInput(testInput) {
    
    if(testInput === "" || testInput === undefined){
        return "Empty";
    }else if(isNaN(testInput)){
        return "Not a Number";
    }else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {  
    const pilotValue = validateInput(pilot);
    const copilotValue = validateInput(copilot);
    const fuelValue = validateInput(fuelLevel);
    const cargoValue = validateInput(cargoLevel);
    if(pilotValue === "Is a Number"
        || copilotValue === "Is a Number"
        || fuelValue === "Not a Number"
        || cargoValue === "Not a Number"){
        alert("Make sure to enter valid information for each field!");
    }else if(pilotValue === "Empty" ||
            copilotValue === "Empty" ||
            fuelValue === "Empty" ||
            cargoValue === "Empty"){
        alert("All fields are required!");
    } else {
        return true;
    }
    return false;
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;