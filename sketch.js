var obj, stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var polygon, polygonI;

function preload(){
}

function setup() {
  createCanvas(800,400);
  
  polygon = new Ground(200, 300, 50, 50);
  stand = new Ground(100, 100, 50, 50);

  // level 1
  box1 = new Box(120, 370, 30, 40);
  box2 = new Box(150, 370, 30, 40);
  box3 = new Box(180, 370, 30, 40);
  box4 = new Box(210, 370, 30, 40);
  box5 = new Box(240, 370, 30, 40);
  box6 = new Box(270, 370, 30, 40);
  box7 = new Box(300, 370,30, 40);

  // level 2
  box8 = new Box(330, 235, 30, 40);
  box9 = new Box(360, 235, 30, 40);
  box10 = new Box(390, 235, 30, 40);
  box11 = new Box(420, 235, 30, 40);
  box12 = new Box(450, 235, 30, 40);

  // level 3
  box13 = new Box(360, 195, 30, 40);
  box14 = new Box(390, 195, 30, 40);
  box15 = new Box(420, 195, 30, 40);

  // level 4
  box16 = new Box(390, 155, 30, 40);
}

function draw() {
  background(255,255,255); 
  
  polygon.display();
  stand.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

