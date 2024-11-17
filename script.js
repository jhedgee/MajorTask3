// Scenes definition
const scenes = {
  titleScreen: {
    text: `<h1>To Write or Not To Write: The Game</h1>
           <h3>by Joshua Brown</h3>
           <button onclick="startGame()">Start</button>`,
    options: []
  },
  intro: {
    text: `Josh: Hey there, player. Welcome to my story: The Game. <br>
           You get to make decisions for me and I hope you enjoy it.<br>
           How do you want it to begin?`,
    options: [
      { text: "Positive experience", nextScene: "Pos1" },
      { text: "Negative experience", nextScene: "desksad" }
    ]
  },
  Pos1: {
    text: `When I was a little kid, I was OBSESSED with fantasy books. I loved to create stories and always dreamt of heroic characters defeating evil. One such story I made in elementary school. It had two characters, TacoCat and BurritoDog. What should I do with this story?`,
    options: [
      { text: "Show it to my mom and my barber", nextScene: "momstory" },
      { text: "Hide it away in desk", nextScene: "desksad" }
    ]
  },
  desksad: {
    text: `Aw man, I'm sure people would have loved to hear that story... Great job stifling my story, player >:(
           <br><br>Anyways, on to the next part.`,
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
      { text: "Next", nextScene: "sadEnding" } // Fix: leads to sadEnding
    ]
  },
  drawing: {
    text: `Wow, that was fun, my mom even came over and we drew for hours and hours. I can feel creativity flowing through me (not literally, that would be weird).`,
    options: [
      { text: "Next", nextScene: "creativeEnding" } // Fix: leads to creativeEnding
    ]
  },
  creativeEnding: {
    text: `Nice job player, you've certainly made some decisions. I'm glad we got to end on a creative note. My mom has really helped me be more imaginative and I think the future is looking pretty bright.`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  },
  sadEnding: {
    text: `C'mon player, I don't think those video games really helped me in the long run... Why don't you try tapping into your imagination next time?`,
    options: [
      { text: "Restart", nextScene: "titleScreen" }
    ]
  }
};

// Function to display a given scene
function displayScene(sceneKey) {
  const scene = scenes[sceneKey];
  const textBox = document.getElementById("text-box");

  // Display the scene's text
  textBox.innerHTML = scene.text;

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

// Function to start the game from the title screen
function startGame() {
  displayScene("intro");
}

// Display the title screen when the page loads
displayScene("titleScreen");
