class Menu implements Imenu {
     private menuAudio:MenuAudio;
     private gameOver:GameOver;
     private pauseScreen:PauseScreen;
     private titleScreen:TitleScreen;
     IsMenuOpen: Boolean;
   
     constructor(_isMenuOpen:Boolean){
         this.menuAudio = new MenuAudio();
         this.gameOver = new GameOver();
         this.pauseScreen = new PauseScreen();
         this.titleScreen = new TitleScreen();
         this.IsMenuOpen = _isMenuOpen
     }
     public startGame(){

     }
     public quit(){

     }
     public draw(){
         
     }

}
    
          
         
