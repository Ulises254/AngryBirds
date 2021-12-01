class Slingshot{
    constructor(bodyA, pointB){
        var options={
        bodyA: bodyA,
        pointB: pointB,
        stiffness:0.7,
        length:10
    }
    this.sling1= loadImage("Sprites/sling1.png");
    this.sling2= loadImage("Sprites/sling2.png");
    this.sling3= loadImage("Sprites/sling3.png");
    this.pointB= pointB;
    this.chain= Constraint.create(options);
    World.add(world, this.chain);
    }
    
    fly(){
        this.chain.bodyA=null;

    }
    attach(body){
        this.chain.bodyA=body;


    }
    
    display(){
        image(this.sling1,205,15);
        image(this.sling2,175,15);
        //Corregir para que cuando se restablesca la constraint no se jale el bird desde donde está
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            push();
            stroke(48,22,8);
            if(pointA.x<220){
                strokeWeight(10);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x-30, pointA.y-10, 15,30);
            }
            else{
                strokeWeight(3);
                line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3);
                image(this.sling3,pointA.x+25, pointA.y-10, 15,30);

            }
            pop();


        }
        
    }


}