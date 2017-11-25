function Star() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(max(width, height)/2);
  this.size = random(1, 8);
  var temperature = random(1);
  this.color = {
    hue: map(temperature, 0, 1, 45, 0),
    sat: 100,
    // lum: random(90, 100)
    lum: map(temperature, 0, 1, 90, 100)
  }
}

Star.prototype.update = function (speed) {
  this.z -= speed;
  if (this.z < 1) {
    this.z = max(width/2, height/2);
    this.x = random(-width, width);
    this.y = random(-height, height);
  }
};

Star.prototype.display = function () {
  var sx = map(this.x/this.z, 0, 1, 0, width/2);
  var sy = map(this.y/this.z, 0, 1, 0, height/2);
  var r = map(this.z, 0, max(width/2, height/2), this.size, 0);
  noStroke();
  fill(this.color.hue, this.color.sat, this.color.lum, r);
  ellipse(sx, sy, r, r);
};
