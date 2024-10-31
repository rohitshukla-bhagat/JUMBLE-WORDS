import { bottomBtnHandle } from "./bottomBtnHandle.js";
import { showWord } from "./showWord.js";

export const levelSet = (data , level , score) => {
  const levelElem = document.querySelector(".level");
  const mode = document.querySelector(".mode");
  // Make the logic based on the mode : Easy , Medium and Hard and set the level number and change the box shadow color
  if (level >= 0 && level <= 25) {
    document.querySelector(".mainBox").style.boxShadow = " 0px 0px 10px green";
    levelElem.innerText = `Level : ${level}/50`;
    mode.innerText = "Mode : Easy";
  } else if (level > 25 && level <= 40) {
    document.querySelector(".mainBox").style.boxShadow = " 0px 0px 10px yellow";
    levelElem.innerText = `Level : ${level}/50`;
    mode.innerText = "Mode : Medium";
  } else if (level > 40 && level <= 50) {
    document.querySelector(".mainBox").style.boxShadow = " 0px 0px 10px red";
    levelElem.innerText = `Level : ${level}/50`;
    mode.innerText = "Mode : Hard";
  }
  showWord(data, level, score); // Calling to the words showing functions
  bottomBtnHandle(); // Calling to the function for controlling the restart button
};