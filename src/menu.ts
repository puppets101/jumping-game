class Menu implements Imenu {
     private menuAudio:MenuAudio;
     private gameOver:GameOver;
     private pauseScreen:PauseScreen;
     private titleScreen:TitleScreen;
     IsMenuOpen: Boolean;
   
     constructor(_menuAudio:MenuAudio,_gameOver: GameOver,_pauseScreen: PauseScreen, _titleScreen: TitleScreen, _isMenuOpen:Boolean ){
         this.menuAudio = _menuAudio;
         this.gameOver = _gameOver;
         this.pauseScreen = _pauseScreen;
         this.titleScreen = _titleScreen;
         this.IsMenuOpen = _isMenuOpen;
     }
     public startGame(){

     }
     public quit(){

     }
     public draw(){
         
     }

}
    
          
         
