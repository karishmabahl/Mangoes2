class Tree{

constructor(x, y, w, h){

var options={

isStatic : true,


}

this.body = Bodies.rectangle(x, y, w, h, options)

this.width = w;
this.height = h;
 this.body.position.y = y;
this.image = loadImage("tree.png");

World.add(world, this.body);


}
display(){


pop();
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
pop();


}


}