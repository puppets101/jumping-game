class Score extends DrawableEntity {
   private score: number;
    
    constructor(_position:p5.Vector,_isVisible:boolean, _score: number) {
        super(_position, _isVisible);
        this.score = _score;
    }
    
    countScore() {
        
    }

    draw() {

    }
}