
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10
var tree;
var ground1;
var boy1;
var stone1, cons1;
var gameState = "stuck";
function preload() {
	boyI = loadImage("boy.png");
	treeI = loadImage("tree.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(600, 400, 30);
	mango2 = new Mango(650, 350, 30);
	mango3 = new Mango(700, 250, 30);
	mango4 = new Mango(560, 290, 30);
	mango5 = new Mango(750, 400, 30);
	mango6 = new Mango(800, 350, 30);
	mango7 = new Mango(850, 270, 30);
	mango8 = new Mango(710, 300, 30);
	mango9 = new Mango(890, 400, 30);
	mango10 = new Mango(900, 310, 30);


	stone1 = new Stone(50, 500, 30);
	cons1 = new Cons(stone1.body, { x: 130, y: 500 });



	ground1 = new Ground(650, 1000, 60);
	//boy1 = new Boy(100, 570, 150, 250);
	//tree = new Tree(700, 400, 600, 500);




	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(111, 205, 247);

	image(boyI, 100, 440, 150, 250);
	image(treeI, 490, 140, 600, 500);

	//tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	ground1.display();
	//boy1.display();
	cons1.display();
	stone1.display();

	detectCollision(stone1, mango1);
	detectCollision(stone1, mango2);
	detectCollision(stone1, mango3);
	detectCollision(stone1, mango4);
	detectCollision(stone1, mango5);
	detectCollision(stone1, mango6);
	detectCollision(stone1, mango7);
	detectCollision(stone1, mango8);
	detectCollision(stone1, mango9);
	detectCollision(stone1, mango10);

	drawSprites();

}

function mouseDragged() {
	if (gameState === "stuck") {
		Matter.Body.setPosition(stone1.body, { x: mouseX, y: mouseY });
	}
}


function mouseReleased() {

	cons1.fly();
	gameState = "launched";

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone1.body, { x: 130, y: 500 })
		cons1.attach(stone1.body);
		gameState = "stuck";
	}
}


function detectCollision(lstone, lmango) {

	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if (distance <= lstone.r + lmango.r) {
		//console.log(distance);
		//console.log(lmango.width / 2 + lstone.width / 2 + "   Yess");
		Matter.Body.setStatic(lmango.body, false);
	}

}

