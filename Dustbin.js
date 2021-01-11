class Dustbin {
    constructor(x,y,width,height){
        options={
            
        isStatic:true
  
        }

       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.body = Bodies.rectangle(200,200,10,50, options);
       World.add(world,this.body);

    }

    display(){

    var logpos = this.body.positon;

    push()
    translate(logpos.x,logpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    rect(this.x,this.x,300,300);
    pop()

    }

}