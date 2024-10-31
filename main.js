import { levelSet } from "./levelSet.js";

fetch("./data.json")
  .then((response) => response.json()) // Extracting the letters from the json file
  .then((data) => {
    let level = 1;
    // Bring the value of important things (level and score ) from local storage 
    let localStorageLevel = JSON.parse(
      localStorage.getItem("wordsMatterLevel")
    );
    if (!localStorageLevel) {
      localStorage.setItem("wordsMatterLevel", JSON.stringify(level));
      localStorageLevel = JSON.parse(localStorage.getItem("wordsMatterLevel"));
    }
    level = localStorageLevel;
    let score = 0;
    let localStorageScore = JSON.parse(
      localStorage.getItem("wordsMatterScore")
    );
    if (!localStorageScore) {
      localStorage.setItem("wordsMatterScore", JSON.stringify(0));
      localStorageScore = JSON.parse(localStorage.getItem("wordsMatterScore"));
    }
    score = localStorageScore;
    if(level == 1){
      score = 0;
    }
    const scoreElem = document.querySelector(".levelScore");
    scoreElem.innerText = `Score : ${score}`; // set the score

    levelSet(data, level, score); // call to the level setting function
  })
  .catch((error) => {
    console.log(error);
  });