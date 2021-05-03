class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);  
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        Constraint(this.sling1,200,20);
        Constraint(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}