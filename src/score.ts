class Score extends DrawableEntity {
    protected score: number;
    
    constructor(_height: number, _width: number, _position: p5.Vector, _isVisable: boolean, _img: string, _score: number) {
        super(_height, _width, _position, _isVisable, _img);
        this.score = _score;
    }
    
    countScore() {
        
    }

    draw() {

    }
}