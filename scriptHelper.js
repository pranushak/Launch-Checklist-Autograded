// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    console.log("information");
    const planets = document.getElementById("missionTarget")
    console.log(planets);
    planets.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star:${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src=${imageUrl}> 
        `;

}

function validateInput(testInput) {

    if (testInput === "" || testInput === undefined) {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let validData = true;
    const pilotValue = validateInput(pilot);
    const copilotValue = validateInput(copilot);
    const fuelValue = validateInput(fuelLevel);
    const cargoValue = validateInput(cargoLevel);
    let pilotId = document.getElementById("pilotStatus");
    let copilotId = document.getElementById("copilotStatus");
    let fuelId = document.getElementById("fuelStatus");
    let cargoId = document.getElementById("cargoStatus");
    let h2Id = document.getElementById("launchStatus");
    list.style.visibility = 'hidden';
    if (pilotValue === "Is a Number"
        || copilotValue === "Is a Number"
        || fuelValue === "Not a Number"
        || cargoValue === "Not a Number") {
        alert("Make sure to enter valid information for each field!");
        validData = false;
    } else if (pilotValue === "Empty" ||
        copilotValue === "Empty" ||
        fuelValue === "Empty" ||
        cargoValue === "Empty") {
        alert("All fields are required!");
        validData = false;
    }
    if (validData) {
        let fuelLevelValid = true;
        let cargoLevelValid = true;
        pilotId.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotId.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000) {
            fuelId.innerHTML = `Fuel level too low for launch`;
            fuelLevelValid = false;
        } else {
            fuelId.innerHTML = `Fuel level high enough for launch`;
        }
        if (cargoLevel > 10000) {
            cargoId.innerHTML = `Cargo mass too heavy for launch`;
            cargoLevelValid = false;
        } else {
            cargoId.innerHTML = `Cargo mass low enough for launch`;
        }
        if (cargoLevelValid && fuelLevelValid) {
            fuelId.innerHTML = `Fuel level high enough for launch`;
            cargoId.innerHTML = `Cargo mass low enough for launch`;
            h2Id.innerHTML = `Shuttle is Ready for Launch`;
            h2Id.style.color = "green";
            list.style.visibility = 'visible';
        } else {
            h2Id.innerHTML = `Shuttle Not Ready for Launch`;
            list.style.visibility = 'visible';
            h2Id.style.color = "red";
        }
    }
}

async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;