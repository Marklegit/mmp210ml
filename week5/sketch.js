function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(220);
    
    var ww = width/4;
    var wh = height/2;
    
    for (var x = ww/4; x < width; x+=ww) {
    for (var y = wh/4; y < height; y+=wh){
        fill(162, 82, 540);
        rect(x,y, ww/2, wh2);
        
        fill('black');
        stroke(167)
       }
        
    }
}

