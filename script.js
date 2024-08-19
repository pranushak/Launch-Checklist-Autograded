// Write your JavaScript code here!

window.addEventListener("load", function() {
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch()
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function() {

    })
    console.log(listedPlanets);
    let form = document.getElementById("launchForm");
    form.addEventListener("submit",function(event){
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let valid = formSubmission(document,listedPlanets,pilotName, copilotName, fuelLevel, cargoMass);
        if(valid) {
            let faultForm = document.getElementById("faultyItems");
            faultForm.style.visibility = 'visible'
            let pilotId = document.getElementById("pilotStatus");
            let copilotId = document.getElementById("copilotStatus");
            pilotId.innerHTML = `Pilot ${pilotName} is ready for launch`;
            copilotId.innerHTML = `Copilot ${copilotName} is ready for launch`;
        } else {
            faultForm.style.visibility = 'hidden';
        }
        event.preventDefault();
    })
    
 });