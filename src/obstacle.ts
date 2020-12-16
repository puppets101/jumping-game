class Obstacle extends MovableEntity {
    protected color: p5.Color;
    protected height: number;
    protected width: number;

    constructor(_position: p5.Vector) {
        super(_position, true, createVector(0, 5), 0); 
        this.color = color(146, 211, 202);
        this.height = 40;
        this.width = 40;
    }

    public update() {
        this.position.y += this.velocity.y;
        this.position.x -= this.velocity.x;

        if (this.position.y + this.height === 250 && platform1.position.x > 400 && platform1.position.x < 550) {
        this.velocity.y = 0;
        this.velocity.x = 3;
        }
    }

    public draw() {
        fill(this.color)
        rect(this.position.x, this.position.y, this.width, this.height)
    }
    }

