class Paper
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
			}

		this.w=w
		this.h=h
        this.image=loadImage("paper.png");
		this.body=Bodies.rectangle(x, y, w - 18, h - 18, options);
 		World.add(world, this.body);
	}
	display()
	{
			
			var PaperPos=this.body.position;		

			push()
			translate(PaperPos.x, PaperPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}