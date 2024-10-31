export const bottomBtnHandle = () => {
  // Here the logic is set when user click on the 'restart game' button . Game will we start from the beginning by setting level : 1 and all the value of the local storage by empty and 0
  const restartBtn = document.querySelector(".restartBtn");
  restartBtn.addEventListener("click", () => {
    localStorage.setItem("wordsMatterLevel", JSON.stringify(0));
    localStorage.setItem("wordsMatterScore", JSON.stringify(0));
    localStorage.setItem("wordsMatterLevelArray", JSON.stringify([]));
    location.href = "index.html";
  });
};
