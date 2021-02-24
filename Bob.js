class Bob
{
    constructor(x,y,radius)
    {
        var boptions=
        {
            isStatic:false,
            restitution:1.2,
            friction:0.5,
            density:0.8
        }

        this.body=Bodies.circle(x,y,radius,boptions)
        this.radius=radius;

    World.add(engine.world,this.body);
    }

    display()
    {
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,80,80);
    }
}