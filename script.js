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



// Scenes definition
const scenes = {
  titleScreen: {
    text: `<h1>To Write or Not to Write: The Game</h1>
           <h3>by Joshua Brown</h3>`,
    options: [
      { text: "Start", nextScene: "intro" }
    ]
  },
  intro: {
    text: `Hey there, player. Welcome to my story: The Game. 
           You get to make decisions for me and I hope you enjoy it.
           <br><br>
           How do you want it to begin?`,
    options: [
      { text: "Positive Experience", nextScene: "positiveExperience" },
      { text: "Negative Experience", nextScene: "negativeLore" }
    ]
  },
  negativeLore: {
    text: `As much as I loved going wild with my stories, there was always one huge issue... grammar.`,
    options: [
      { text: "Next", nextScene: "middleSchool" }
    ]
  },
  middleSchool: {
    text: `It's middle school and I finally have to do real work (surprised it took this long). I need to finish this essay ASAP, but it would be sooooo easy to slack off. Still, I really feel like it needs some work.`,
    options: [
      { text: "Revise with Dad", nextScene: "suffering" },
      { text: "Turn it in", nextScene: "failure" }
    ]
  },
  suffering: {
    text: `This is brutal, he's reading it back to me and making marks all over the page. This sounds horrible, I made so many mistakes and feel like crying.`,
    options: [
      { text: "Next", nextScene: "success" }
    ]
  },
  success: {
    text: `Hey! I got an A-, I understand how to write better now but dang, that was a tough lesson to learn.`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  },
  failure: {
    text: `OOOOOF, I sure hope the teacher goes easy on me.`,
    options: [
      { text: "Next", nextScene: "badGrade" }
    ]
  },
  badGrade: {
    text: `C+, such a horrible grade, I really wish I had prepared more...`,
    options: [
      { text: "Next", nextScene: "secondChance" }
    ]
  },
  secondChance: {
    text: `Another essay? Oh boy... Time to prepare (or not prepare).`,
    options: [
      { text: "Barely put forth an effort", nextScene: "rockbottom" },
      { text: "Get creative then revise with Dad", nextScene: "winr2chckndinr" }
    ]
  },
  rockbottom: {
    text: `F?? Dinner time conversation is going to suuuck (and I'll probably get grounded).`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  },
  winr2chckndinr: {
    text: `I am so proud of this one, I wrote what I wanted, then listened to my dad's criticism and made a masterpiece. I guess the key all along was to blend the right amount of creativity and punctuality.`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  },
  positiveExperience: {
    text: `When I was a little kid I was OBSESSED with fantasy books. I loved to create stories and always dreamt of heroic characters defeating evil. One such story I made in elementary school. It had two characters, TacoCat and BurritoDog. What should I do with this story?`,
    options: [
      { text: "Show it to my mom and my barber", nextScene: "momstory" },
      { text: "Hide it away in desk", nextScene: "desksad" }
    ]
  },
  desksad: {
    text: `Aw man, I'm sure people would have loved to hear that story... Great job stifling my story, player >:( Anyways, on to the next part.`,
    options: [
      { text: "Next", nextScene: "freewill" }
    ]
  },
  momstory: {
    text: `I know it's weird to bring a story to a barber but little me was so proud. Both my barber and my mom loved it. It was so great showcasing my creativity.`,
    options: [
      { text: "Next", nextScene: "freewill" }
    ]
  },
  freewill: {
    text: `I'm bored, what do you think I should do?`,
    options: [
      { text: "Paint", nextScene: "drawing" },
      { text: "Play videogames", nextScene: "MLG" }
    ]
  },
  MLG: {
    text: `I played on my Xbox for the whole afternoon. I don't really feel much better after that. Maybe my brain is rotting away.`,
    options: [
      { text: "Next", nextScene: "sadending" }
    ]
  },
  drawing: {
    text: `Wow, that was fun, my mom even came over and we drew for hours and hours. I can feel creativity flowing through me (not literally, that would be weird).`,
    options: [
      { text: "Next", nextScene: "creativeending" }
    ]
  },
  creativeending: {
    text: `Nice job player, you've certainly made some decisions. I'm glad we got to end on a creative note. My mom has really helped me be more imaginative and I think the future is looking pretty bright.`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  },
  sadending: {
    text: `C'mon player, I don't think those video games really helped me in the long run... Why don't you try tapping into your imagination next time?`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  }
};

// Function to start the game from the title screen
function startGame() {
  displayScene("intro");
}

// Display the title screen when the page loads
displayScene("titleScreen");
