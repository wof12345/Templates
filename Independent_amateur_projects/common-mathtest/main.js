function init() {
  setInterval(OnDraw, 200);
}

var time = 0;
var color = "#ff0000";

function OnDraw() {
  time = time + 0.2;
  var canvas = document.getElementById("mycanvas");
  var dataLine = canvas.getContext("2d");
  var value = document.getElementById("lineWidth");

  dataLine.clearRect(0, 0, canvas.width, canvas.height);

  dataLine.beginPath();
  dataLine.moveTo(0, canvas.height * 0.5);
  for (cnt = -1; cnt <= canvas.width; cnt++) {
    dataLine.lineTo(
      cnt,
      canvas.height * 0.5 -
        (Math.random() * 2 + Math.cos(time + cnt * 0.05) * 20)
    );
  }

  dataLine.lineWidth = value.value * 0.1;
  dataLine.strokeStyle = color;
  dataLine.stroke();
}

function overColor() {
  color = "#ff0000";
}

function leaveColor() {
  color = "#0000ff";
}

init();
