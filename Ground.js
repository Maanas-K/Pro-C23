class Ground{
    //prop
      constructor(x,y,w,h){
      var groundOptions={
          isStatic:true
          
  
      }
  
     this.body=Bodies.rectangle(x,y,w,h,groundOptions);
     this.width=w
     this.height=h
     World.add(world,this.body);
      }
  
  
   display(){
    var pos=this.body.position;
     
    fill ("lightblue")
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width,this.height);
   }
  
  }
  
  