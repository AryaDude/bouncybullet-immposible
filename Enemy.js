class RedPerson extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

  display(){
    super.display()
   }
 
   score(){
     if (this.body.speed > 1){
       score++;
       console.info("Good Job!!!")
     }
   }

  



};

