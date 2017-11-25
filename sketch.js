var stars, xoff = 0.0, yoff = 0.0;
var offset, bgColor, speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  offset = createVector(0.003, 0.002);
  bgColor = "#111122CC";
  speed = 4;
  var numStars = 800;
  stars = new Array(numStars).fill(0).map(function (n) {
    return new Star();
  });
}

function draw() {
  background(bgColor);
  xoff += offset.x;
  yoff += offset.y;
  translate(noise(xoff) * width, noise(yoff) * height);
  stars.forEach(function (star) {
    star.update(speed);
    star.display();
  })
}

function mousePressed() {
  offset = createVector(0, 0);
  speed = 10;
  bgColor = "#11112211"
}

function mouseReleased() {
  offset = createVector(0.003, 0.002);
  speed = 4;
  bgColor = "#111122CC"
}
