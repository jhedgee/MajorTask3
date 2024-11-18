// Function to create the rainy effect
function addRainEffect() {
  let rainContainer = document.querySelector('.rain');

  // Avoid adding multiple rain containers
  if (!rainContainer) {
    rainContainer = document.createElement('div');
    rainContainer.classList.add('rain');

    // Number of raindrops
    const numberOfDrops = 100;

    // Create and animate raindrops
    for (let i = 0; i < numberOfDrops; i++) {
      const drop = document.createElement('div');
      drop.classList.add('drop');

      // Set random positions for the raindrops
      drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      drop.style.animationDuration = `${Math.random() * 1 + 2}s`; // Random fall speed

      // Set random delay for each raindrop
      drop.style.animationDelay = `${Math.random() * 2}s`;

      rainContainer.appendChild(drop);
    }

    // Append the rain container to the body
    document.body.appendChild(rainContainer);
  }
}

// Function to remove the rain effect (when transitioning to another scene)
function removeRainEffect() {
  const rainContainer = document.querySelector('.rain');
  if (rainContainer) {
    rainContainer.remove();
  }
}

// Function to display a given scene
function displayScene(sceneKey) {
  const scene = scenes[sceneKey];
  const textBox = document.getElementById("text-box");

  // Display the scene's text
  textBox.innerHTML = scene.text;

  // Handle rain effect based on scene
  if (sceneKey === "rockbottom") {
    document.body.classList.add("rockbottom"); // Apply rockbottom-specific styling
    addRainEffect();
  } else {
    document.body.classList.remove("rockbottom"); // Remove rockbottom styling
    removeRainEffect();
  }

  // Add leapfrog animation for "positiveExperience" scene
  const gameContainer = document.getElementById("game-container");
  if (sceneKey === "positiveExperience") {
    if (!document.getElementById("burritoDog")) {
      const burritoDog = document.createElement("img");
      burritoDog.src = "burritodogreal.webp"; // Correct file path
      burritoDog.id = "burritoDog";
      gameContainer.appendChild(burritoDog);
    }

    if (!document.getElementById("tacoCat")) {
      const tacoCat = document.createElement("img");
      tacoCat.src = "tacocatreal.webp"; // Correct file path
      tacoCat.id = "tacoCat";
      gameContainer.appendChild(tacoCat);
    }
  } else {
    // Remove images when leaving positiveExperience
    const burritoDog = document.getElementById("burritoDog");
    const tacoCat = document.getElementById("tacoCat");
    if (burritoDog) burritoDog.remove();
    if (tacoCat) tacoCat.remove();
  }

  // Remove existing buttons
  const buttonContainer = document.getElementById("button-container");
  buttonContainer.innerHTML = "";

  // Add option buttons for the scene
  scene.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.onclick = () => displayScene(option.nextScene);
    buttonContainer.appendChild(button);
  });
}
