
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var plinko = [];
var divisions = [];

var divisionHeight = 300;


var ground;

var score=0;

var particle

var turn=0

gameState = "start"

count = 0;
function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(230, 795, 500, 10);
 

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }

  for (var j = 15; j <= width; j = j + 50) {
    plinko.push(new Plinko(j, 75, 10));
  }

  for (var j = 15; j <= width - 10; j = j + 50) {
    plinko.push(new Plinko(j, 275, 10));
  }

  for (var j = 30; j <= width - 10; j = j + 50) {
    plinko.push(new Plinko(j, 175, 10));
  }

}


function draw() {
  background(0);
  
  stroke("blue")
  strokeWeight(5)
  textSize(30)
 
  text(score,20,30)

  text("500", 10, 550)
  text("500", 90, 550)
  text("100", 170, 550)
  text("100", 250, 550)
  text("200", 330, 550)
  text("200", 410, 550)


  Engine.update(engine);
  ground.display();

  if (gameState === 0) {

    textSize(80);
    text("game over", 10, 250);

  }

  for (var b = 0; b < plinko.length; b++) {
    plinko[b].display();
  }

  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 200) 
            {

                particle=null;
                if ( turn>= 5){
                  gameState =0;
                }     
             
                 score= score+500
                                  
            }


            else if (particle.body.position.x < 400 && particle.body.position.x > 201 ) 
            {
                  particle=null;
                  if ( turn>= 5){
                    gameState =0;
                  }  
           
                  score = score+100;
                  

            }
            else if (particle.body.position.x < 700 && particle.body.position.x > 401 )
            {
                  
                  particle=null;
                  if ( turn>= 5){
                    gameState =0;
                  }  
                  score= score+200

            }      
            
      }

    }
  for (var a = 0; a < divisions.length; a++) {
    divisions[a].display();
  }

  //mousePressed();
}

function mousePressed()
{

  particle=new Particle(mouseX,10,10,10)

  if(mousePressed){
    turn=turn+1
  }

 if(turn>=5){
gameState= "end"

 }
}
