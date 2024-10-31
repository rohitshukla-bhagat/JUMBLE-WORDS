import { responsiveManage } from "./responsiveManage.js";
import { userInput } from "./userInput.js";

export const showWord = (data, level, score) => {
  // Setting the levelArray localstorage functionality b/c the program does not repeat the same word later
  if (level == 1 || level == 26 || level == 41) {
    localStorage.setItem("wordsMatterLevelArray", JSON.stringify([]));
  }
  let levelArrayFromLS = JSON.parse(
    localStorage.getItem("wordsMatterLevelArray")
  );
  if (!levelArrayFromLS) {
    localStorage.setItem("wordsMatterLevelArray", JSON.stringify([]));
    levelArrayFromLS = JSON.parse(
      localStorage.getItem("wordsMatterLevelArray")
    );
  }
  const levelArray = Object.values(levelArrayFromLS);
  // Check the level and give the letters based on the mode (easy , medium and hard)
  if (level >= 0 && level <= 25) {
    let words = data[0].easy;
    wordsShowingFunc(words, levelArray, score, level); // calling the function for showing the words
  } else if (level >= 26 && level <= 40) {
    let words = data[0].medium;
    wordsShowingFunc(words, levelArray, score, level); // calling the function for showing the words
  } else if (level >= 41 && level <= 50) {
    let words = data[0].hard;
    wordsShowingFunc(words, levelArray, score, level); // calling the function for showing the words
  }
};
const wordsShowingFunc = (words, levelArray, score, level) => {
  let randomNum = randomNumber();
  // Checking that random number is generate again or not using levelArray from local Storage
  while (true) {
    let count = 0;
    levelArray.forEach((elem) => {
      if (randomNum == elem) {
        count++;
      }
    });
    if (count == 0 || levelArray.length == 0) {
      break;
    } else {
      randomNum = randomNumber();
    }
  }
  const letterArray = Object.values(words);
  const letter = letterArray[randomNum];
  const resultLetter = letter.split(""); // Create an array , where each letter is the element of the array
  let messedLetter = [];
  resultLetter.forEach((elem) => {
    messedLetter.push(elem.toUpperCase());
  });
  messedLetter = messedLetter.sort(); // Mess the letters by sorting technique help to jumble the words
  const DomLetters = document.querySelector(".letters");
  // Creating the element (divs) for each letter occur in the word
  messedLetter.forEach((elem) => {
    let box = document.createElement("div");
    box.innerText = elem.toUpperCase();
    box.classList.add("box");
    DomLetters.append(box);
  });

  levelArray.push(randomNum);
  localStorage.setItem("wordsMatterLevelArray", JSON.stringify(levelArray)); // Setting levelArray with addign the new randomNumber
  responsiveManage(resultLetter.length); // Call the function for manage the number size of the divs if it's increased
  userInput(letter, score, level); // Calling to the function of user input logic
  
};

// generates the random number
const randomNumber = () => {
  return Math.floor(Math.random() * 100).toString();
};