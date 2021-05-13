class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
  this.trajectory=[]



  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>250 && this.body.velocity.x>13){
   var h=[this.body.position.x,this.body.position.y]
 
   this.trajectory.push(h)}
   for(var index=0;index<=this.trajectory.length-1;index++){
  image(this.image1,this.trajectory[index][0],this.trajectory[index][1])
   }



  }
  
}
