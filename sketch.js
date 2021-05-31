var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairyImg,fairy;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png","starImage.png","starNight.png");
	bgImg = loadImage("starryNight.jpg");
	fairyImg=loadImage("fairy.png","fairyImage1.png","fairyImage2.png")
	//load animation for fairy here
   fairyImg=loadSound("joyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairlyImg.loop();
	//create fairy sprite and add animation for fairy
fairly=createSprite(200,400,30,50);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  keyPressed();
  //write code to stop star in the hand of fairy
IF (star.isTouching(fairy));{
star.velocityY=0;
star.velocityY=0;
}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyDown === LEFT_ARROW){
		fairy.velocityX=-3;
	}
	if (keyDown === RIGHT_ARROW){
		fairy.velocityX=3;
	}

}
