// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let nameOfPilot = document.querySelector("input[name=pilotName]");
      let nameOfCoPilot = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
      if(nameOfPilot.value === "" || nameOfCoPilot.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
         alert("All fields are required!");
      }
      if(isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Need to input a number");
      } 
      let parse = parseInt(nameOfPilot.value)
      let parseCO = parseInt(nameOfCoPilot.value)
      if(!isNaN(parse) || !isNaN(parseCO)){
         alert("Need to use letters");
      }
      let statusOfPilot = document.getElementById("pilotStatus");   
      let statusOfCoPilot = document.getElementById("copilotStatus");
      let statusOfFuel = document.getElementById("fuelStatus");
      let statusOfLaunch = document.getElementById("launchStatus");
      let statusOfMass = document.getElementById("cargoStatus")
      if(nameOfPilot){
         statusOfPilot.innerHTML = `Pilot ${nameOfPilot.value} is Ready`
      }
      if(nameOfCoPilot){
         statusOfCoPilot.innerHTML = `Co-pilot ${nameOfCoPilot.value} is Ready`
         event.preventDefault();
      }
      if("formSubmit"){
         faultyItems.style.visibility = "visible";
      }
      if(parseInt(fuelLevelInput.value) < 10000){
         statusOfFuel.innerHTML = `There is not enough fuel for the journey.`
         statusOfLaunch.innerHTML = `Shuttle not ready for launch`
         statusOfLaunch.style.color = "red"
      }
      if(parseInt(cargoMassInput.value) > 10000){
         statusOfMass.innerHTML = `There is too much mass for the shuttle to take off`
         statusOfLaunch.innerHTML = `Shuttle not ready for launch`
         statusOfLaunch.style.color = "red"
      }
      if(parseInt(fuelLevelInput.value) > 10000 && parseInt(cargoMassInput.value) < 10000 ){
         statusOfLaunch.innerHTML = `Shuttle is ready for launch`
         statusOfLaunch.style.color = "green"
      }
   });
});
      
      
      













/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
