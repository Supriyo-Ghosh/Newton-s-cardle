class Rope{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
           
        }
        //console.log(options);
      this.rope=Constraint.create(options);
      World.add(world,this.rope);
    }
    display(){
     var pointA = this.rope.bodyA.position
     var pointB = this.rope.bodyB.position
     strokeWeight(2)

    varAnchor2X=pointB.x+this.offsetX
    varAnchor2Y=pointB.y+this.offsetY

    line(Anchor1X, Ahchor1Y, Anchor2X, Anchor2Y);
    }
}