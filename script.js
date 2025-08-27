// ------Heart-----

let clicked = {};
function heartClick(id) {
  const btn = document.getElementById(id);
  btn.addEventListener("click", function () {
    if (!clicked[id]) {
      let heart = parseInt(document.getElementById("heart-number").innerText);
      updatedHeart = heart + 1;
      document.getElementById("heart-number").innerText = updatedHeart;
      btn.style.color = "red";
      clicked[id] = true;
    } else {
      let heart = parseInt(document.getElementById("heart-number").innerText);
      updatedHeart = heart - 1;
      document.getElementById("heart-number").innerText = updatedHeart;
      btn.style.color = "";
      clicked[id] = false;
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

// -----call------

document.getElementById("call-btn1").addEventListener("click", function () {
  let coin = parseInt(document.getElementById("coin-number").innerText);
  updatedCoin = coin - 20;

  if (updatedCoin < 20) {
    alert("Insufficient Coin");
    return;
  }

  document.getElementById("coin-number").innerText = updatedCoin;

  alerted("national-emergency-number","national-emergency-number-call")

});

function alerted(id1,id2) {
  const forAlert1 = document.getElementById(id1).innerText;
  const forAlert2 = document.getElementById(id2).innerText;
  alert(forAlert1 + " is : " + forAlert2);
  return;
}
