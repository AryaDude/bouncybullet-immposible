class Pig extends BaseClass {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }
  

  display(){
    super.display()
   }
 
   score(){
     if (this.body.speed > 1){
      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
       score++;
       console.info("Good Job!!!")
       this.body.x = getRandomInt(800)
     }
   }

  



};

