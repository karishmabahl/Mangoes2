class Boy{

constructor(x, y, w, h){

var options={

    isStatic: true

}

this.body=Bodies.rectangle(x, y, w, h, options);
this.body.position.x = x;
this.body.position.y = y;
this.height = h;
this.width = w;
this.image = loadImage("boy.png");
World.add(world, this.body);

}
display(){

//pos = this.body.position

push();

imageMode(CENTER)
image(this.image,this.body.position.x,this.body.position.y, this.width, this.height);

pop();

}



}