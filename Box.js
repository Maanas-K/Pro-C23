
class Box{
  //prop
    constructor(x,y,w,h){
    var boxOptions={
        //'restitution':0.8,
        isStatic:false
        //'density':1,

    }

   this.body=Bodies.rectangle(x,y,w,h,boxOptions);
   this.width=w
   this.height=h
   //this.color=colour
   World.add(world,this.body);
    }


 display(){
  var pos=this.body.position;
  var angle=this.body.angle;
  
     stroke ("red")
    // line (0,0,pos.x,pos.y)
     push();
     translate(pos.x,pos.y);
     rotate(angle);

     fill ("blue")
     rectMode(CENTER);
     rect(0,0,this.width,this.height);
     pop();
  }

}




