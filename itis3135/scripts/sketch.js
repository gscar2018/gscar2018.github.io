
function setup() {
    createCanvas(800, 500);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 20, 20);
  }

  draw();