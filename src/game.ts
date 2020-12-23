class Game {
    public menu: Menu;
    
    // private menu: Menu;
    public gamePlay: GamePlay;

    constructor() {
        this.menu = new Menu(true, "");
        this.gamePlay = new GamePlay();
    }
        
    update(){
        this.gamePlay.update();
    }

    draw() {
        this.gamePlay.draw();
        // this.menu.draw();
    }
}