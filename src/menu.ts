class Menu implements Imenu {
     private menuAudio:MenuAudio
     private gameOver:GameOver;
     private pauseScreen:PauseScreen;
     private titleScreen:TitleScreen;
      IsMenuOpen:Boolean
     constructor(_IsMenuOpen: Boolean){
         this.menuAudio = new MenuAudio;
         this.gameOver = new GameOver;
         this.pauseScreen = new PauseScreen
         this.titleScreen = new TitleScreen;
         this.IsMenuOpen = _IsMenuOpen
     }
     public startGame(){

     }
     public quit(){

     }
     public draw(){
         this.titleScreen.draw()
     }

}
         
    
          
     
   
         
