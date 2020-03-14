// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
  let takeoffButton = document.getElementById("takeoff");
  let flightStatus = document.getElementById("flightStatus");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
  let trueHeight = Number(spaceShuttleHeight.innerHTML);
  let landButton = document.getElementById("landing");
  let missionAbort = document.getElementById("missionAbort");
  let upButton = document.getElementById("up");
  let downButton = document.getElementById("down");
  let rightButton = document.getElementById("right");
  let leftButton = document.getElementById("left");
  let rocketPosition = 0;

  takeoffButton.addEventListener("click", function() {
    let answer = confirm("Confirm that the shuttle is ready for takeoff.");
    if (answer === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML = trueHeight + 10000;
    }
  })

  landButton.addEventListener("click", function() {
    let answer = alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = trueHeight;
  })

  missionAbort.addEventListener("click", function() {
    let answer = confirm("Confirm that you want to abort the mission.");
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = trueHeight;
  })
  
  leftButton.addEventListener("click", function() {
    rocketPosition -= 10;
    rocket.style.left = `${rocketPosition}px`;
    })

  rightButton.addEventListener("click", function() {
    rocketPosition += 10;
    rocket.style.left = `${rocketPosition}px`;
    })

  downButton.addEventListener("click", function() {
    rocketPosition += 10;
    rocket.style.top = `${rocketPosition}px`;
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
  })

  upButton.addEventListener("click", function() {
    rocketPosition -= 10;
    rocket.style.top = `${rocketPosition}px`;
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
  })
}

window.onload = init;
