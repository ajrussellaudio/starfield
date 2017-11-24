function Star() {
  this.x = random(-width/2, width/2);
  this.y = random(-height/2, height/2);
  this.z = random(max(width/2, height/2));
}

Star.prototype.update = function () {
  this.z -= 4;
  if (this.z < 1) {
    this.z = max(width/2, height/2);
    this.x = random(-width/2, width/2);
    this.y = random(-height/2, height/2);
  }
};

Star.prototype.display = function () {
  var sx = map(this.x/this.z, 0, 1, 0, width/2);
  var sy = map(this.y/this.z, 0, 1, 0, height/2);
  var r = map(this.z, 0, max(width/2, height/2), 8, 0);
  fill(255);
  noStroke();
  ellipse(sx, sy, r, r);
};
