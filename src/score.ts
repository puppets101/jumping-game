
class Score extends DrawableEntity {
   private score: number;
    
    constructor(_position:p5.Vector,_isVisible:boolean, _score: number) {
        super(_position, _isVisible);
        this.score = _score;
    }
    
    countScore() {
        this.score = this.score + deltaTime / 500
        text(round(this.score), 40, 50);
    }

    draw() {
        let v1 = createVector(50, 50);
        ellipse(v1.x, v1.y, 50, 50)
    }
}