
class Score extends DrawableEntity {
   private score: number;
    
    constructor(_position:p5.Vector,_isVisible:boolean, _score: number) {
        super(_position, _isVisible);
        this.score = _score;
    }
    
    countScore() {
        fill("black")
        this.score = this.score + deltaTime / 500
        text(round(this.score), 40, 50);
        textFont(pixelFont);
    }

    draw() {
    }
}