import { nextLevelBtn } from "./nextLevelBtn.js";

export const userInput = (letter, score, level) => {
  const matchBtn = document.querySelector(".match");
  const inputBox = document.querySelector(".guess");
  const errorParent = document.querySelector(".errorCon");
  let count = 0.1; // Setting count as 0.1 for future logic
  inputBox.addEventListener("keydown", () => {
    errorRemove(errorParent); // when user press key on input tag the error of message will be removed using errorRemove func
  });
  // When user click on the 'match' Btn
  matchBtn.addEventListener("click", () => {
    if (count != 0) {
      if (matchBtn.innerText == "Match") {
        // enter when button text = match
        if (inputBox.value != "") {
          // enter when input not be empty
          const userInputValue = inputBox.value.toLowerCase();
          const realLetter = letter.toLowerCase();
          errorRemove(errorParent);
          if (userInputValue == realLetter) {
            // enter , if user input word is matched with actual word
            const rightMusic = new Audio("public/jumblewordright.wav");
            rightMusic.play();
            const newError = document.createElement("p"); // creates an 'p' tag for message
            newError.innerText = "Right !";
            newError.classList.add("error", "rightError");
            errorParent.prepend(newError);
            score++; // increasing score by one b/c the user is right
            const scoreElem = document.querySelector(".levelScore");
            scoreElem.innerText = `Score : ${score}`;
            count = 0; // count = 0 , now click event does not work and user only click on the 'next round' Btn
            nextLevelBtn(level, score); // Calling to generate 'next round' button
          } else {
            // If user wrong
            const newError = document.createElement("p"); // Genearate an 'p' tag for error
            newError.innerText = "Wrong !";
            newError.classList.add("error", "wrongError");
            errorParent.prepend(newError);
            count++;
            if (count <= 4.1) {
              const rightMusic = new Audio("public/jumblewordswrong.wav");
              rightMusic.play();
            }
          }
          if (count == 2.1) {
            // If count = 2.1 the hint button is show and perform the logic of hint Btn
            const hintParent = document.querySelector(".userGuess");
            const hintBtn = document.createElement("button");
            hintBtn.innerText = "Hint";
            hintBtn.classList.add("hint", "Btn");
            hintParent.append(hintBtn);
            hintBtn.addEventListener("click", () => {
              errorRemove(errorParent);
              inputBox.value = "";
              const letterArr = letter.toUpperCase().split("");
              let hintLetter = [];
              // set the logic for generating the hint word
              for (let i = 0; i < letterArr.length; i++) {
                if (i % 2 != 0) {
                  hintLetter[i] = "_";
                } else {
                  hintLetter[i] = letterArr[i];
                }
              }
              inputBox.placeholder = hintLetter;
              setTimeout(() => {
                // Hint word disappear after 1.5sec
                inputBox.placeholder = "Guess The Word !";
              }, 1500);
            });
          } else if (count == 5.1) {
            // If count = 5.1 then the user lose the round and she/he only click on the quit Btn
            const rightMusic = new Audio("public/jumblewordquit.wav");
            rightMusic.play();
            const matchBtn = document.querySelector(".match");
            matchBtn.innerText = "Quit"; // change the text and class of 'match' btn by 'quit'
            matchBtn.classList = "quit";
            matchBtn.classList.add("quitShadow");
            errorParent.firstElementChild.innerText = "You Lose !";
            inputBox.value = "";
            inputBox.placeholder = `Word = ${letter.toUpperCase()}`; // showing the correct word after lose
          }
        } else {
          // show error if input is empty
          inputBox.placeholder = "Input Not Be Empty !";
          setTimeout(() => {
            // error disappear after 1.5sec
            inputBox.placeholder = "Guess The Word !";
          }, 1500);
        }
      } else if (matchBtn.innerText == "Quit") {
        // if clicked Button is 'Quit' then move to the next round by increasing the level
        level++;
        localStorage.setItem("wordsMatterLevel", JSON.stringify(level));
        location.href = "index.html";
      }
    }
  });
};

// error remove logic
const errorRemove = (errorParent) => {
  if (
    errorParent.firstElementChild.innerText == "Right !" ||
    errorParent.firstElementChild.innerText == "Wrong !"
  ) {
    errorParent.firstElementChild.remove();
  }
};
