var sponge = [];
var rotation = 0;

function setup() {
    createCanvas(400, 400, WEBGL);

    var b = new myBox(0, 0, 0, 200);
    sponge.push(b);
}

function mousePressed() {
    if (sponge.length < 400) {
        var nextBoxes = [];
        for(var i=0; i<sponge.length; i++) { 
            var newBoxes = sponge[i].generateBoxes();
            nextBoxes = nextBoxes.concat(newBoxes);
        }    
    sponge = nextBoxes;
    }
}

function draw() {
    background(51);
    rotateX(rotation);
    rotateY(rotation * 0.4);
    rotateZ(rotation * 0.1);
    rotation += 0.01;

    for(var i=0; i<sponge.length; i++) {
        sponge[i].show();
    }
}