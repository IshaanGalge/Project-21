
var bullet,wall ,thickness
var speed ,weight
var deformation






function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(223,321))
  weight=Math.round(random(30,52))
  thickness=Math.round(random(22 ,83))
  bullet=createSprite(50, 200, 200, 10);
  wall=createSprite(1200 ,200 ,thickness ,height/2)
  wall.shapeColor=(80,80,80)
  bullet.velocityX=speed  
}
function draw() {
  background("black");  
  if (bullet.x-wall.x<bullet.width/2+wall.width/2&&
      wall.x-bullet.x<bullet.width/2+wall.width/2) {
        
        deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
        console.log(deformation)
        bullet.velocityX=0
  
}
        if (deformation<10) {
          wall.shapeColor="green"
        }
       
        
        if (deformation>10) {
          wall.shapeColor="red"

        }
      
          
      
  drawSprites();
}