var stars, xoff = 0.0, yoff = 0.0;
var offset, bgColor, speed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSL);
  frameRate(60);
  speed = 1;
  offset = createVector(width, height).div(max(width, height)).mult(speed/1000)
  bgColor = "#06001488";
  var numStars = 6400;
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
