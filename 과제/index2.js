function screenColor() {
  const body = document.body;
  var windowHeight = window.innerWidth;
  if (windowHeight > 900) {
    body.classList.add("wider");
  } else {
    body.classList.remove("wider");
  }
  if (windowHeight < 600) {
    body.classList.add("narrower");
  } else {
    body.classList.remove("narrower");
  }
  console.log(windowHeight);
}
window.addEventListener("resize", screenColor);
