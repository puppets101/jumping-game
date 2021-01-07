class Obstacle extends MovableEntity {
    protected color: p5.Color;
    public height: number;
    public width: number;
    public image: p5.Image;

    constructor(image: p5.Image, x: number, y: number,velocityX: number, velocityY: number) {
        super(createVector(x, y), true, createVector(velocityX, velocityY), 0);
        this.color = color(0, 255, 255);
        this.height = 50;
        this.width = 30;

        this.image = image;
    }

    public update() {
        this.position.y += this.velocity.y;
        this.position.x -= this.velocity.x;
        this.isOnScreen()
    }

    public draw() {
        // fill(this.color)
        // rect(this.position.x, this.position.y, this.width, this.height)

        image(this.image, this.position.x -37, this.position.y - 25, 100, 100)
    }

    private isOnScreen() {
        if (this.position.x + this.width < 0) {
            this.isVisible = false;
        }
        else {
            this.isVisible = true;
        }
    }
}
