function star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(2*width);
    this.pz = this.z;

    this.update = function() {
        this.z = this.z - speed;

        if (this.z < 1) {
            this.x = random(-width, width);
            this.y = random(-height, height);
            this.z = 2*width;
            this.pz = this.z;
        }
    }

    this.show = function() { 
        fill(255);
        noStroke();

        var dx = map(this.x/this.z, 0, 1, 0, width);
        var dy = map(this.y/this.z, 0, 1, 0, height);
        var r = map(this.z, 0, 2*width, 12, 0);

        ellipse(dx, dy, r, r);

        var px = map(this.x/this.pz, 0, 1, 0, width);
        var py = map(this.y/this.pz, 0, 1, 0, height);

        this.pz = this.z;

        stroke(255);
        line(px, py, dx, dy);
    }
}