class Lives extends DrawableEntity {
    protected lives: number;
    constructor(_position:p5.Vector,_isVisible:boolean,_lives:number){
        super(_position,_isVisible)
        this.lives = _lives
    }
   

    public countLives() {

    }
    draw(){}

}