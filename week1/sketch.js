function setup(){
    
    createCanvas(640,480);
    
    background('lightgray');
    //hair//

    fill('black');

    ellipse(330,280,520);
    //hair// 

    //face//
    fill('yellow');

    ellipse(310,300,500);
    //face//

    //eyes//

    fill('black');
 	line(120,130,210,180);

    fill('white');
    ellipse(145, 180, 40, 40);
    ellipse(375, 180, 50, 50);
	fill('black');
    arc(370, 170, 90, 60 , PI, PI);

    fill('black')
    ellipse(145, 180, 30, 30);

    fill('black');
    arc(140, 170, 70, 40 , PI, PI);

	
    fill('black')
    ellipse(375, 180, 40, 40);

    //eyes//
    
    //mouth//
   
    //mouth// 

    //nose//
    fill('yellow');
    line(200,225,200,250);
    arc(185, 280, 70, 70 , PI-1, PI-1);
    //nose//

    //hair//
     fill('black');

    triangle(200, 60, 195, 60, 250, 100);
    
    triangle(300, 70, 195, 60, 260, 110);

    triangle(400, 80, 195, 80, 270, 120);

    triangle(150, 60, 195, 90, 230, 100);
    
    triangle(250, 70, 195, 100, 260, 110);

    triangle(350, 80, 205, 110, 260, 120);

    triangle(200, 320, 70, 400, 400, 400);
     fill('yellow');
     //hair//

     //ear//
    arc(540, 260, 90, 90 , PI+1, HALF_PI);
    //ear//
}