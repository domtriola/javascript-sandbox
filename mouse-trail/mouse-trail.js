var dots = null;
var mousePositions = [];

function initializeDots() {
  dots = [];
  for (var i = 0; i < 5; i++) {
    var dot = document.createElement("div")
    dot.className = "trail";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dots.push(dot);
  }
  dots.forEach(function(dot) {
    document.body.appendChild(dot);
  });
}

function updateDots() {
  dots.forEach(function(dot, i) {
    if (mousePositions[i]) {
      dot.style.left = mousePositions[i][0];
      dot.style.top = mousePositions[i][1];
    }
  });
}

addEventListener("mousemove", function(event) {
  if (dots == null)
    initializeDots();

  mousePositions.push([(event.pageX - 4) + "px", (event.pageY - 4) + "px"]);
  if (mousePositions.length > 5)
    mousePositions = mousePositions.slice(mousePositions.length - 5);

  updateDots();
});
