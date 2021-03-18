class Polygon{
    constructor(x,y,r){
        var option = {
            'density' : 4,
            'restitution' : 1,
            'friction' : 1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.Image = loadImage("polygon.png");
        this.body = Bodies.circle(this.x,this.y,this.r/2,option);
        World.add(world,this.body);
    }
    
    

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.Image,0,0,this.r,this.r)
        pop();
    }
}