class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("Sprites/ave.png");
    this.smokeImg = loadImage("Sprites/smoke.png");
    this.trayectoria= [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.velocity.x>10 && this.body.position.x>300){
      var position
      this.trayectoria.push([this.body.position.x, this.body.position.y]); 
    }
    for(var i=0; i<this.trayectoria.length; i++){
      image(this.smokeImg, this.trayectoria[i][0], this.trayectoria[i][1]);
    }
  }
}
