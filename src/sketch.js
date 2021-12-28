//set canvas to window size
var h;
var w;

//initialize canvas
function setup() {
	h = window.innerHeight;
	w = window.innerWidth;

  	canvas = createCanvas(w, h);
  	canvas.parent("canv")
}

//updating function
function draw() {
	console.log(w, h);
	background(255, 255, 255);
	
	bottomColor = [255, 239, 194]
	remColor = [255 - 255, 255 - 184, 255 - 219]

	for (var i = 0; i < h; i++) {
		midColor = [bottomColor[0] + remColor[0]*i/h, bottomColor[1] + remColor[1]*i/h, bottomColor[2] + remColor[2]*i/h]
		stroke(color(midColor[0], midColor[1], midColor[2]))
		strokeWeight(1);
		line(0, i, w, i)
	}
}

window.onresize = function() {
	h = window.innerHeight;
	w = window.innerWidth;
	canvas.resize(w, h);
}