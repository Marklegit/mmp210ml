function setup() {
	createCanvas(1000, 1000);
	background("white");
	
	var glass = 5;
    
	for (var x = 1; x < width; x += width/glass) {
		glassWind(x + 10, 10, width/glass - 20, 400, 8);
	}

}

var glassWind = function(x, y, w, h, m) {
    //left side inside
    strokeWeight(m/2);
	
	
	
    //right side inside 
	
	
	
    
	strokeWeight(m/2);
    stroke("pink");
    fill('#0080a0');
	rect(x, y, w, h, 50);
	
    //upper left 
	stroke("red");
	strokeWeight(m/10);
    fill('#ebedc0');
	rect(x + m, y + m, w/2 - 2*m, h/2, 30, 30, 10, 10);
    
    fill('#eafca9');
    rect(x + 2*m, y + m, w/2 - 4*m, h/2, 30, 30, 10, 10);
    
    //upper right
    fill('#ebedc0');
	rect(x + m + w/2, y + m, w/2 - 2*m, h/2, 30, 30, 10, 10);
    
    fill('#eafca9');
    rect(x + 2*m + w/2, y + m, w/2 - 4*m, h/2, 30, 30, 10, 10);
	
    fill('#eafca9');
    //bottom left
	rect(x + m, y + 2*m + h/2, w/2 - 2*m, h/2 - 3*m, 10, 10, 30, 30);
    fill('#eafca9');
    //bottom right
    rect(x + m + w/2, y + 2*m + h/2, w/2 - 2*m, h/2 - 3*m, 10, 10, 30,30);
    noFill();
    
    
    
}