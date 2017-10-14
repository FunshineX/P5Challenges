function myBox(x, y, z, r) {
    this.position = createVector(x, y, z);
    this.r = r;

    this.generateBoxes = function() {
        var newBoxes = [];
        var newR = r / 3;

        for (var x=-1; x<=1; x++) {
            for (var y=-1; y<=1; y++) {
                for (var z=-1; z<=1; z++) {
                    var sum = abs(x) + abs(y) + abs(z);
                    if (sum > 1) {
                        var b = new myBox(this.position.x + x * newR, this.position.y + y * newR, this.position.z + z * newR, newR);
                        newBoxes.push(b);
                    }
                }
            }
        }
        return newBoxes;
    }

    this.show = function() {
        push();
        translate(this.position.x, this.position.y, this.position.z);
        stroke(255);
        noStroke();
        noFill();
        box(this.r);
        pop();
    }
}