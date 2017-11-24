var stars;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var numStars = 1200;
  stars = new Array(numStars).fill(0).map(function (n) {
    return new Star();
  });
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stars.forEach(function (star) {
    star.update();
    star.display();
  })
}
