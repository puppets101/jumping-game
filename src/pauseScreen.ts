// interface ?
class PauseScreen {
    protected menuOptions: string;
    protected bgColor: string;
    private menu: Imenu;

    constructor(menu: Imenu){
        this.menuOptions = "";
        this.bgColor = "";
        //this.isMenuOpen = _isMenuOpen
        this.menu = menu;
    }
    

    continueGame() {

    }

    quit() {

    }
    draw(){}

}