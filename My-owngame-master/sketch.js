const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var game;
var form;
var player;
var gameState = 0;
var playerCount;
var allPlayers;
var guns, gun1;
var gun2;
var gun3;
var gun4;
var alien;
var ground;
var Bg;
var GameOver;
var TryAgain;
var background;
var backgroundimg;
var alienImg;
var aliensGroup;
var BulletImg;
var bullet;
var gunImg;

function preload() {
  gunImg = loadImage("gun.png");
  BulletImg = loadImage("bullet.png");
  alienImg = loadImage("alien.png");
  backgroundimg = loadImage("backgroundalien.jpg");
  Bg = loadImage("debg.jpg");
  GameOver = loadImage("gameover.jpg");
  TryAgain = loadImage("tryagain.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {
 background(backgroundimg);

  if (playerCount === 4) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    game.level1();
  }
  if (gameState === 2) {
    game.end();
  }
}
