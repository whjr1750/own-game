//   variables   //
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var backgroundImg;
var manStand, manRun, manImage, manAnimation;
var enemy, enemyImg, enemyAnimation;
var sShip, sShipImg;

var factory1, factory1Img;
var factory2, factory2Img;
var factory3, factory3Img;
var factory4, factory4Img;
var factory5, factory5Img;
var factory6, factory6Img;

//extra object variables
var cover, coverImg;


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!        PRELOAD           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function preload() {

  backgroundImg = loadImage("assets/b-g.jpg");

  factory1Img = loadImage("assets/factory 1.png");
  factory2Img = loadImage("assets/factory 2.png");
  factory3Img = loadImage("assets/factory 3.png");
  factory4Img = loadImage("assets/factory 4.png");
  factory5Img = loadImage("assets/factory 5.png");
  factory6Img = loadImage("assets/factory 6.png");

  coverImg = loadImage("assets/sack.png");

  manImage = loadAnimation("assets/p1.png");
  manAnimation = loadAnimation("assets/p2.png", "assets/p3.png", "assets/p4.png");
  //enemyAnimation = loadAnimation( "assets")


}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@        SETUP          @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function setup() {
  //^^^^^^^^^^^^^^^^^^^^^   CODES THAT WILL WORK THE GAME IN BOTH PC AND MOBILES   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = diplayWidth;
    canH = displayHeight;
    createCanvas(diplayWidth + 80, displayHeight);
  }
  else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  };
  //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//


  manStand = createSprite(150, 500, 60, 60);
  manStand.addAnimation("man", manImage);
  manStand.scale = 3;

  cover = createSprite(670, 500, 60, 60);
  cover.addImage(coverImg);
  cover.scale = 0.6

  // enemy = createSprite(400, 500, 60, 60);
  // enemy.addAnimation("enemy", manStand)
  // enemy.scale = 3;
  manStand.addAnimation("man2", manAnimation);

}

//#################################################         DRAW           ############################################################

function draw() {
  background(backgroundImg);


  if (keyWentDown(RIGHT_ARROW)) {
    manStand.changeAnimation("man2", manAnimation);
    manStand.x += 2;
  }
  if (keyWentUp(RIGHT_ARROW)) {
    manStand.changeAnimation("man", manImage)
  }



  drawSprites();

}
