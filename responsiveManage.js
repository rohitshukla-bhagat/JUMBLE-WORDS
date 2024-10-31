export const responsiveManage = (length) => {
  // Here is the code for manage the size of Divs if the letter length is greater than 9
  const boxes = document.querySelectorAll(".box");
  if (length > 9) {
    boxes.forEach((box) => {
      box.style.fontSize = "0.8em";
    });
  }else if(length > 6 && length <= 9){
    boxes.forEach((box) => {
      box.style.fontSize = "1em";
    });
  }
};
