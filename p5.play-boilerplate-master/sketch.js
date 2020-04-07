var sun,mercury
var sun_img, mercury_img
var angleSpeed = 0.2;
var angle = 0;
var sun_radius;

function preload(){
sun_img = loadImage("assets/sun.jpg");
mercury_img = loadImage("assets/planet1.png");



}



function setup() {
  createCanvas(800,800);

  

  sun = createSprite(400,400,50,50);
 sun.addImage("sun",sun_img);
 sun.setCollider("circle",-85,-65,120);
  sun.debug=true;

  mercury = createSprite(170,120,10,10);
  mercury.addImage("mercury",mercury_img);
  mercury.setCollider("circle",0,0,200);
 mercury.debug=true;




mercury.rotateToDirection=true;
mercury.velocityX = 3;
}

function draw() {
  
 background(5,5,20); 
 mercury.rotation = mercury.rotation + 6

angleMode(DEGREES);
 translate(width/2,height/2);
 rotate(angle);
 angle = angle+angleSpeed;
 
 if(frameCount%1===0){
   sun.scale=sun.scale+0.001;
 }
 drawSprites();

}

