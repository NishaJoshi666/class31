class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.trajectery = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var arr1 = [this.body.position.x,this.body.position.y];
      this.trajectery.push(arr1);
    }
   
    for(var i=0;i<this.trajectery.length;i++){
      image(this.image1,this.trajectery[i][0],this.trajectery[i][1]);
    }
  }
}
