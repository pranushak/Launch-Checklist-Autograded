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
        if(valid) {
            let faultForm = document.getElementById("faultyItems");
            let pilotId = document.getElementById("pilotStatus");
            let copilotId = document.getElementById("copilotStatus");
            let fuelId = document.getElementById("fuelStatus");
            let h2Id = document.getElementById("launchStatus");
            let cargoId = document.getElementById("cargoStatus");
            faultForm.style.visibility = 'hidden';
            pilotId.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotId.innerHTML = `Copilot ${copilotName} is ready for launch`;
            fuelId.innerHTML = `Fuel level high enough for launch`;
            cargoId.innerHTML = `Cargo mass low enough for launch`;
            h2Id.innerHTML = `Awaiting Information Before Launch`;
            h2Id.style.color = "";
            if(fuelLevel < 10000){
                fuelId.innerHTML = `Fuel level too low for launch`;
                h2Id.innerHTML = `Shuttle Not Ready for Launch`;
                h2Id.style.color = "red";
                faultForm.style.visibility = 'visible';
            }
            else if(cargoMass > 10000){
                cargoId.innerHTML = `Cargo mass is too much for the shuttle to take off`;
                h2Id.innerHTML = `Shuttle Not Ready for Launch`;
                h2Id.style.color = "red";
                faultForm.style.visibility = 'visible';
            }else {
                h2Id.innerHTML = `Shuttle is Ready for Launch`;
                h2Id.style.color = "green";
            }
        } 
        
    })
    
 });