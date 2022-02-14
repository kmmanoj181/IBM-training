import "./styles.css";

document.getElementById("red").onclick = function () {
  changeBackgroundColor("red");
};
document.getElementById("green").onclick = function () {
  changeBackgroundColor("green");
};
document.getElementById("blue").onclick = function () {
  changeBackgroundColor("blue");
};

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
