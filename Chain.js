class Chain
{
    constructor(body1,point2)
    {
        var options=
        {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 300
        }
        this.chainbody= Constraint.create(options);
        World.add(world,this.chainbody);
    }
/*fly()
{
    this.slingbody.bodyA=null
}*/

    display()
    { 
        if(this.chainbody.bodyA)
        {
           var A=this.chainbody.bodyA.position
           var B=this.chainbody.pointB
           line(A.x,A.y,B.x,B.y)
        }
    }
}