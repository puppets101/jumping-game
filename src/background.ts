class Background extends MovableEntity {
    private bgImg: p5.Image;
    private x1: number = 0;
    private x2: number;
    private scrollSpeed: number = 2;

    constructor(_position: p5.Vector, _isVisible: boolean, _velocity: p5.Vector, _applyGravity: number) {
        super(_position, _isVisible, _velocity, _applyGravity)
        // load the background image here
        this.bgImg = loadImage('./assets/imgs/cyberpunk-street.png');
        // sets the x-value of the second image of the loop as the width of the canvas
        this.x2 = width;
    }
    update() { }
    draw() {
        //creates two instances of the image to loop
        image(this.bgImg, this.x1, 0, width, height);
        image(this.bgImg, this.x2, 0, width, height);

        //sets the scrollspeed for the images 
        this.x1 -= this.scrollSpeed;
        this.x2 -= this.scrollSpeed;

        if (this.x1 < -width) {
            this.x1 = width;
        }
        if (this.x2 < -width) {
            this.x2 = width;
        }
    }
}
