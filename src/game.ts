class Game {
    private isMenuOpen: boolean;
    private menu: Menu;
    private gamePlay: GamePlay;

    constructor() {
        this.isMenuOpen = true;
        this.menu = new Menu();
        this.gamePlay = new GamePlay();
    }
    update(){
        
    }
    draw() {

    }
}