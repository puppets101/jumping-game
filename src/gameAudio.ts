class GameAudio extends DrawableEntity {
 protected playBackgroundAudio: boolean;

  constructor(_position: p5.Vector, _isVisible: boolean) {
    
    super(_position, _isVisible);
    this.playBackgroundAudio = true;
  }
  

  public toggleAudio() {
    if(game.menu.menuState === "main"){
    if(this.playBackgroundAudio) {
      this.playBackgroundAudio = false;
      backgroundSound.loop();
      backgroundSound.setVolume(0.1);
      }
    }
    if(game.menu.menuState === "gameOver") {
      // cant acces menustate gameover.
      backgroundSound.stop();
      this.playBackgroundAudio = true;
    }
    // if(game.gamePlay.lives.life === 0) {
    //   console.log("DÖDÖDÖDÖ")
    // }

  }
  public draw(){
    this.toggleAudio();

    // tried to access trought lifes, but no work
    // if(game.gamePlay.lives.life === 0) {
    //   console.log("DÖDÖDÖDÖ")
    // }
  }




}

