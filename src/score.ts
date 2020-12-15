// error when added type p5.Vector on _position
class Score extends DrawableEntity {
    score: number;
    
    constructor(score: number, _height: number, _width: number, _position: p5.Vector, _isVisable: boolean, _img: string) {
        super(_height, _width, _position, _isVisable, _img);
        this.score = score;
        
    }
    
    countScore() {
        super.position = new p5.Vector()
        super.position = createVector(10 , 10); // position will be x=10, y=10 
    }
}