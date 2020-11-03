class Paper{
    constructor(x,y){
       var  option={
            restitution : 0.8,
            density : 1,
            friction: 0.5
        }
        this.paper = Bodies.circle(x,y,30,option) ;
        World.add(world,this.paper);
        

    }
    display(){
        
    
        var posX = this.paper.position.x
        var posY = this.paper.position.y

        translate(posX,posY);
        rotate(this.paper.angle);
        ellipseMode(CENTER);
        fill("red")
        ellipse(this.paper.position.x,this.paper.position.y,30,30);

    }

}