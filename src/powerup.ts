class Powerup extends MovableEntity {
    protected color: p5.Color;
    public height: number;
    public width: number;
    //public powerupAsset: p5.Image;

    constructor() {
        super(createVector(650, 0), true, createVector(0, 10), 0);
        this.color = color(220, 20, 60);
        this.height = 20;
        this.width = 20;
        //this.powerupAsset = powerupAsset;
    }

public update() {
    this.position.y += this.velocity.y;
    this.position.x -= this.velocity.x;
    this.isOnScreen()
}

public draw() {
    fill(this.color)
    rect(this.position.x, this.position.y, this.width, this.height)

    //image(this.powerupAsset, this.position.x, this.position.y, this.width, this.height)
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
