class MenuAudio {
    public audioImg: p5.Image;

    constructor() {
        this.audioImg = unmute;
    }
    update() {
       game.gameAudio.update();
    }
    public draw() {
        //image(this.audioImg, 725, 525, 50, 50)
        game.gameAudio.draw();
    }
    


}