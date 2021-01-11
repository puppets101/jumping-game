class Obstacle extends MovableEntity {
    public height: number;
    public width: number;
    public image: p5.Image;
    public deathImage: p5.Image;
    public isShot: boolean;
    public isDead: boolean;
    private deathTimer: number;
    public scrollSpeed: number;

    constructor(image: p5.Image, deathImage: p5.Image, x: number, y: number,velocityX: number, velocityY: number, scrollSpeed: number) {
        super(createVector(x, y), true, createVector(velocityX, velocityY), 0);
        this.height = 50;
        this.width = 30;
        this.isShot = false;
        this.isDead = false;
        this.deathTimer = 300;

        this.image = image;
        this.deathImage = deathImage;
        this.scrollSpeed = scrollSpeed;
    }

    public update() {
        this.position.y += this.velocity.y;
        this.position.x -= (this.velocity.x + this.scrollSpeed);
        this.isOnScreen()
        if(this.isShot) {
            this.deathTimer -= deltaTime;
            this.image = this.deathImage;
            if (this.deathTimer < 0) {
                this.isDead = true;
            }
        }
    }

    public draw() {
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
