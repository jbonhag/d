var capture;
var jitter = [0, 1];

var diameter = 32;

function setup() {
  // put setup code here
  pixelDensity(1);
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  noStroke();
  capture.loadPixels();
  for (var y = 0; y < height; y+=diameter) {
    for (var x = 0; x < width; x+=diameter) {
      var p = (x + y * width) * 4;
      c = color(capture.pixels[p],
                capture.pixels[p+1],
                capture.pixels[p+2]);
      fill(c);
      square(x + random(jitter), y+random(jitter), diameter+random(jitter)) ;
      /*
      ellipse(x + (diameter/2) + random(jitter),
              y + (diameter/2) + random(jitter),
              diameter+random(jitter));
              */
    }
  }
}

function mousePressed() {
saveFrames('out', 'png', 1, 25);
}
