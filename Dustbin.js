class Dustbin{
    constructor(x,y){
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle = 0
        this.bottomBody = Bodies.rectangle(x, y, this.dustbinWidth, this.wallThickness, {isStatic: true});
        this.leftWallBody = Bodies.rectangle(x-this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
        Matter.Body.setAngle(this.leftWallBody, this.angle);
        this.rightWallBody = Bodies.rectangle(x+this.dustbinWidth/2, y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic: true});
        Matter.Body.setAngle(this.rightWallBody, -1 * this.angle);
        this.image = loadImage("dustbingreen.png")
        World.add(world, this.bottomBody);
        World.add(world, this.leftWallBody);
        World.add(world, this.rightWallBody);
    }
    display(){
        var posBottom =this.bottomBody.position;
        var posLeft =this.leftWallBody.position;
        var posRight =this.rightWallBody.position;

        push();
        translate(posLeft.x, posLeft.y);
        rotate(this.angle)
        rectMode(CENTER);
        //rect(0, 0, this.wallThickness, this.dustbinHeight);
        pop();

        push();
        translate(posBottom.x, posBottom.y);
        rotate(this.angle)
        rectMode(CENTER);
        //rect(0, 0, this.dustbinWidth, this.wallThickness);
        pop();

        push();
        translate(posRight.x, posRight.y);
        rotate(this.angle)
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        pop();
    }
}