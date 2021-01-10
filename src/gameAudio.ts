class GameAudio extends DrawableEntity {
  private backgroundSwitch: boolean;
  private shootSwitch: boolean;
  private fatalitySwitch: boolean;
  constructor() {
    super(createVector(), true);
    this.backgroundSwitch = false;
    this.shootSwitch = false;
    this.fatalitySwitch = false;
  }


  public toggleAudio() {
    // audio

    // background sound
    if (game.menu.menuState === "close" && this.backgroundSwitch === false){
      this.backgroundSwitch = true;
      this.fatalitySwitch = false;
        backgroundSound.loop();
        backgroundSound.setVolume(.1);
    }
    if(game.menu.menuState === "gameOver") {
      backgroundSound.stop()
      this.backgroundSwitch = false;
      this.shootSwitch = false;
    }

    // shoot sound
    if(game.menu.menuState === "close" && (keyCode === 32) && this.shootSwitch === false){
      shootSound.play();
      shootSound.setVolume(.5);
      this.shootSwitch = true;

      if(this.shootSwitch){
        
      }

    }

    // fatality audio
    if(game.menu.menuState === "gameOver" && this.fatalitySwitch === false){
      fatality.play()
      this.fatalitySwitch = true;
    }


  }
  public draw(){
    this.toggleAudio();
}
}

