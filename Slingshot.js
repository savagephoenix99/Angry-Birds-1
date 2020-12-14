class Slingshot{
    constructor(bodyA, pointB) {
        var options = {
                bodyA:bodyA,
                pointB:pointB,
                length:10,
                stiffness:0.04 
                }
                this.sling1=loadImage("sling1.png")
                this.sling2=loadImage("sling2.png")
                this.sling3=loadImage("sling3.png")
                this.pointB=pointB
            this.object=Constraint.create(options)
        World.add(world, this.object);
      }
      attach(body){
        this.object.bodyA=body;
      }
      fly(){
          this.object.bodyA=null;
      }
      
      display(){
          image(this.sling1,200, 25)
          image(this.sling2,170, 25)
          if(this.object.bodyA){
          var pointA = this.object.bodyA.position;
          var pointB = this.pointB;
          if(pointA.x<210){
          stroke(48,22,8)
          strokeWeight(4)
          line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
          line(pointA.x+20, pointA.y, pointB.x+30, pointB.y)
          image(this.sling3, pointA.x-30, pointA.y-10, 15, 30)
        }
        else 
        {

            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y)
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y)
            image(this.sling3, pointA.x+20, pointA.y-10, 15, 30)
        }
          }
      }
       }