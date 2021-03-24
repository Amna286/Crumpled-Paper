class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'density':0.29,
          'friction':10,
          'restitution':1
      }
      this.body = Bodies.rectangle(x, y, 90, 90, options);
      this.width = 90;
      this.height = 90;
      this.image = loadImage("paper.png");

      World.add(world, this.body);
    }

    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);

      //fill("yellow");
      //rect(0, 0, 50, 50);
      imageMode(CENTER);
      image(this.image, 0, 10, this.width, this.height);
      pop();
    }
  }