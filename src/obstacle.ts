class Obstacle extends MovableEntity {
    protected color: p5.Color;
    public height: number;
    protected width: number;

    constructor() {
        super(createVector(500, 0), true, createVector(0, 10), 0); 
        this.color = color(0, 255, 255);
        this.height = 30;
        this.width = 30;
    }

    public update() {
        this.position.y += this.velocity.y;
        this.position.x -= this.velocity.x;
    }

    public draw() {
        fill(this.color)
        rect(this.position.x, this.position.y, this.width, this.height)
    }

    public isOnScreen() {
        if (this.position.x + this.width < 0) {
            this.isVisible = false;           
        }
        else {
            this.isVisible = true;
        }
    }
}
