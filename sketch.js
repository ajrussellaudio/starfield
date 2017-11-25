var stars, xoff = 0.0, yoff = 0.0;
var offset, bgColor, speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSL);
  speed = 2;
  offset = createVector(width, height).div(max(width, height)).div(speed).div(250);
  bgColor = "#111122CC";
  var numStars = 3200;
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
