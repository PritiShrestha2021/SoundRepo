//if else if example

const num = "1";

if (num > 1) {
  console.log("this is more than number 1");
} else if (num == 1) {
  console.log("this is number 1");
} else if (num < 1) {
  console.log("this is less than number 1");
} else {
  console.log("Error");
}

//for loop syntax
//for (value initialization;NumIteration;increment/decrement)
// let i;
// for (i = 0; i <= 6; i++) {
//   console.log(i);
// }

// const getButton = document.getElementById("btn1");
// console.log(getButton);
// //play sound on button click example
// //callbackfunction :call function inside function
// getButton.addEventListener("click", () => {
//   const playSound = new Audio("/Javascript/sound/BabyElephantWalk60.wav");
//   playSound.play();
// });

let j;
const getButton1 = document.querySelectorAll("#btn");
const lengthButton = getButton1.length;
console.log(lengthButton);

const playfunc = getHTML => {
  if (getHTML == "Play Sound1") {
    const playSound = new Audio(
      "./guitarsound/mixkit-cool-guitar-riff-2321.wav"
    );
    playSound.play();
    console.log(getHTML);
  } else if (getHTML == "Play Sound2") {
    const playSound = new Audio(
      "./guitarsound/mixkit-guitar-stroke-up-slow-2338.wav"
    );
    playSound.play();
    console.log(getHTML);
  } else if (getHTML == "Play Sound3") {
    const playSound = new Audio(
      "./guitarsound/mixkit-happy-guitar-chords-2319.wav"
    );
    playSound.play();
    console.log(getHTML);
  } else if (getHTML == "Play Sound4") {
    const playSound = new Audio(
      "./guitarsound/mixkit-short-guitar-strum-2318.wav"
    );
    playSound.play();
    console.log(getHTML);
  }
};

for (j = 0; j < lengthButton; j++) {
  const getBtn = document.querySelectorAll("#btn")[j];
  getBtn.style.color = "blue";
  const getHTML = getBtn.innerHTML;
  // const btn = document
  //   .querySelectorAll("#btn")
  //   [j].addEventListener("click", () => playfunc(getHTML));
  const btn = getBtn.addEventListener("click", () => playfunc(getHTML));
  // console.log(getHTML);
}

const rrr = document.querySelectorAll("div >h1");
//console.log(rrr[0]);
rrr[0].style.color = "red";
