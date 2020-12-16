class Obstacle extends MovableEntity {
    protected color: p5.Color;
    protected height: number;
    protected width: number;

    constructor() {
        super(createVector(500, 0), true, createVector(0, 10), 0); 
        this.color = color(146, 211, 202);
        this.height = 30;
        this.width = 30;

    }

    public update() {
        this.position.y += this.velocity.y;
        this.position.x -= this.velocity.x;

        if ((this.position.y + this.height === 250 && (platform1.position.x > 400 && platform1.position.x < 500 || platform2.position.x > 400 && platform2.position.x < 500))  // obstacle lands on one of the lower platforms
            || (this.position.y + this.height === 150 && (platform3.position.x > 400 && platform3.position.x < 500 || platform4.position.x > 400 && platform4.position.x < 500)) // obstacle lands on one of the upper platforms
            || (this.position.y + this.height === 400)) // obstacle lands on the ground
            {
        this.velocity.y = 0;
        this.velocity.x = 3;
        }
        if (this.position.x + this.width <= 0) {
            obstacle1 = new Obstacle();
          }
    }

    public draw() {
        fill(this.color)
        rect(this.position.x, this.position.y, this.width, this.height)
    }

    // CREATING OBSTACLES IN AN ARRAY
 /*   public addNewObstacle() {
        let newObstacle = new Obstacle();
        obstacle.push(newObstacle);
        console.log(obstacle)
      } */
}

