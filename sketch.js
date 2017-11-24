var stars, xoff = 0.0, yoff = 0.0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var numStars = 800;
  stars = new Array(numStars).fill(0).map(function (n) {
    return new Star();
  });
}

function draw() {
  background(0);
  xoff += 0.003;
  yoff += 0.002;
  translate(noise(xoff) * width, noise(yoff) * height);
  stars.forEach(function (star) {
    star.update();
    star.display();
  })
}
