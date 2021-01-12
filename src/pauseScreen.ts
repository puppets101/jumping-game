// interface ?
class PauseScreen {
    private fade: number;
    private fadeAmount: number;

    constructor() {
        this.fadeAmount = 1;
        this.fade = 40;
    }

    update() {
      game.gameAudio.update();
    }
    
    draw() {
      game.gameAudio.draw();

        background('rgba(0,0,0,0.5)');
        textFont(outrunFont);
        textSize(50);
        fill(128, 0, 0);
        stroke(0);
        strokeWeight(1);
        textAlign(CENTER);
        text("Pause", 400, 200);

        // text for press any key
        textFont(pixelFont);
        textSize(20);
        fill(128, 0, 0, this.fade);
        textAlign(CENTER);
        text("Press ENTER to continue", 400, 500);
        noStroke();

        if (this.fade <= 40) {
            this.fadeAmount = 5;
          } else if (this.fade > 255) {
            this.fadeAmount = -5;
          }
          this.fade += this.fadeAmount;
    }

}