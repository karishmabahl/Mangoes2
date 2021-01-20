class Ground {

   constructor(y, w, h) {

      var options = {

         isStatic: true

      }

      this.body = Bodies.rectangle(500, y, w, h, options);
      this.height = h;
      this.width = w;
      this.body.position.y = y;
      World.add(world, this.body);

   }

   display() {

      push();

      var pos = this.body.position;
      rectMode(CENTER);
      fill(184, 70, 19);
      rect(pos.x, pos.y, this.width, this.height);

      pop();

   }


}