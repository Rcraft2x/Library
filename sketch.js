var redcircle
var bluecircle
var greencircle
var orangecircle
var yellowcircle
var player1, player2
var playerCount
var gameState
var canvas
var aplayer1, aplayer2
var abluecircle, aredcircle, agreencircle, aorangecircle, ayellowcircle
var border, aborder
function preload(){
  aplayer1 = loadImage("assets/aplayer1.png")
  aplayer2 = loadImage("assets/aplayer2.png")
  aredcircle = loadImage("assets/red circle.png")
  abluecircle = loadImage("assets/blue circle.png")
  agreencircle = loadImage("assets/green circle.png")
  aorangecircle = loadImage("assets/orange circle.png")
  ayellowcircle = loadImage("assets/yellow circle.png")
  aborder = loadImage("assets/BORDER.png")
}

function setup(){
  canvas = createCanvas(500, 500);
  //database = firebase.database();
  player1 = createSprite(50,250,10,10)
  player1.addImage(aplayer1)
  player1.scale = 0.1
  player1.debug=false
  player2 = createSprite(450,250,10,10)
  player2.addImage(aplayer2)
  player2.scale = 0.1
  player2.debug=false
}

function draw(){
background("green")
//console.log(gameState)
drawSprites()
if(keyDown(RIGHT_ARROW)){
  player1.x = player1.x + 5
}
}