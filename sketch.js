var bullet,wall;
var speed, weight; 
var thickness;

function setup() {
  
    createCanvas(1600, 400);

	speed = random(30, 52);
  
    weight = random(223, 321);

	bullet = createSprite(50, 200, 60, 30);   

	bullet.velocityX = speed;

	bullet.shapeColor = 'white';

	thickness = random(22, 83);
  
  	wall = createSprite(1200, 200, thickness, height / 2);
    
  	wall.shapeColor = color(80, 80, 80);
}

function draw(){
 
  background(0);

  if(wall.x - bullet.x < (bullet.width+wall.width) / 2){
    bullet.velocityX=0;
    
    var damage = 0.5 * weight * speed * speed / wall.width * wall.width * wall.width;
    
	  if(damage > 10000000){
		wall.shapeColor = 'green';
	  }

	  if(damage < 10000000){
		wall.shapeColor = 'red';
	  }
  } 

  console.log(damage);
  
  drawSprites();
 
}


