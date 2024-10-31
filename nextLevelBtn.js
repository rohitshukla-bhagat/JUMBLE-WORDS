export const nextLevelBtn = (level, score) => {
  // Generate the button of 'Next Level' when the user word matched with actual word
  const bottomBtnCont = document.querySelector(".bottomBtn");
  const btn = document.createElement("button");
  btn.classList.add("nextBtn", "newNextBtn", "Btn");
  btn.innerText = "Next Level";
  bottomBtnCont.append(btn);
  btn.addEventListener("click", () => {
    // Move to the next levelby increasing the level and set the score and level to the local storage
    if (level == 50) {
      // Redirect to congrates page if the levels are completed
      localStorage.setItem("wordsMatterLevel", JSON.stringify(0));
      localStorage.setItem("wordsMatterLevelArray", JSON.stringify([]));
      location.href = "congrates.html";
    } else {
      level++;
      localStorage.setItem("wordsMatterLevel", JSON.stringify(level));
      localStorage.setItem("wordsMatterScore", JSON.stringify(score));
      location.href = "index.html";
    }
  });
};
