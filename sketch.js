var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];

var particle;
var Turn = 0;
var divisions
var divisionHeight=300;
var score =0;
var gameState = PLAY;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500",10,760)
 text("500",30,760)
 text("500",50,760)
 text("500",70,760)
 text("100",90,760)
 text("100",110,760)
 text("100",130,760)
 text("200",150,760)
 text("200",170,760)
 text("200",190,760)


  Engine.update(engine);
 mousePressed();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

if(particle!=null)
{
  particle.display();
  
  if(particle.body.position.y>760){
    if (particle.body.position.x < 300)
    {
      score=score+500;
      particle=null;
      if(count>=5) gameState = "end"
    }
  }
}

if(particle!=null)
{
  particle.display();
  
  if(particle.body.position.y>760){
    if (particle.body.position.x > 301 < 600)
    {
      score=score+100;
      particle=null;
      if(count>=5) gameState = "end"
    }
  }
}

if(particle!=null)
{
  particle.display();
  
  if(particle.body.position.y>760){
    if (particle.body.position.x > 601 < 900 )
    {
      score=score+500;
      particle=null;
      if(count>=5) gameState = "end"
    }
  }
}
if(score=score+1){
  Turn=Turn+1
}
if(Turn=5){
  gameState=end;
  text("GAME OVER",400,400)
  textSize(70)
}
function mousePressed(){
if(gameState!=="end"){
  count++;
  particle=new Particle(mouseX, 10, 10, 10);
}
}





