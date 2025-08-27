let clicked = {};
function heartClick(id) {
  document.getElementById(id).addEventListener("click", function () {
    if (!clicked[id]) {
      let heart = parseInt(document.getElementById("heart-number").innerText);
      updatedHeart = heart + 1;
      document.getElementById("heart-number").innerText = updatedHeart;
      clicked[id] = true;
    }
  });
}

heartClick("heart-btn");
heartClick("heart-btn2");
heartClick("heart-btn3");
heartClick("heart-btn4");
heartClick("heart-btn5");
heartClick("heart-btn6");
heartClick("heart-btn7");
heartClick("heart-btn8");
heartClick("heart-btn9");




