class Menu implements Imenu {
     protected menuAudio:MenuAudio;
     protected gameOver:GameOver;
     protected pauseScreen:PauseScreen;
     protected titleScreen:TitleScreen;
     public isMenuOpen: boolean;
     public menuState: string

   
     constructor(_isMenuOpen:boolean,_menuState: string){
         this.menuAudio = new MenuAudio();
         this.gameOver = new GameOver();
         this.pauseScreen = new PauseScreen(this);
         this.titleScreen = new TitleScreen();
         this.isMenuOpen = _isMenuOpen
         this.menuState = _menuState
     }
     public startGame(){

     }
     public quit(){

     }
     public draw(){
        if (this.menuState === "main"){
            //show main menu
        } else if (this.menuSate === "pause") {
            //show pause menu
        } else if (this.menuState === "gameOver"){
            //show game over menu 
        } else {
            this.titleScreen.draw();
            
            
        }
     }

}
    
          
         
