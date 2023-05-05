
const ConfettiGenerator = require('confetti-js');

function addConfetti() {
  const canvas = document.createElement("canvas");
  canvas.id = "confetti-canvas";
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const confettiSettings = {
    target: "confetti-canvas",
    max: 200,
    size: 1.5,
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [[255, 0, 0], [0, 255, 0], [0, 0, 255]],
    clock: 25,
    rotate: true,
  };

  const confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}

module.exports = addConfetti;
