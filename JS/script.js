let heart = document.querySelector(".icon");
let txt = document.querySelector(".txt");

heart.onclick = function () {
  document.getElementsByTagName("body")[0].style.background = "#03001C";
  heart.textContent = "☠️";
  txt.textContent = "I'm dead";
  txt.style.color = "#f9f9f9";
  heart.style.animationPlayState = 'paused';
};
