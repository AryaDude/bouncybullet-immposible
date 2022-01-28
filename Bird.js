class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    var options = {
      'restitution':1.0,
      'friction':1.0,
      'density':1.0
  }
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200 && gameState === "launched"){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    
  }
}
