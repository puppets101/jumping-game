class Powerup extends MovableEntity {
    protected color: p5.Color;
    public height: number;
    public width: number;
    //public powerupAsset: p5.Image;

    constructor() {
        super(createVector(500, 0), true, createVector(0, 10), 0);
        this.color = color(0, 255, 255);
        this.height = 20;
        this.width = 20;
        //this.powerupAsset = powerupAsset;
    }
}