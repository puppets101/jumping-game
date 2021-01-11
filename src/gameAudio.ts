class GameAudio extends DrawableEntity {
  private backgroundSwitch: boolean
  private fatalitySwitch: boolean;
  private titleSwitch: boolean;
  constructor() {
    super(createVector(250, 250), true);
    this.backgroundSwitch = false;
    this.fatalitySwitch = false;
    this.titleSwitch = false;
  }
  
  public draw(){
    this.toggleAudio();


}

  public toggleAudio() {
    // main menu sound
    if(game.menu.menuState === "main" && this.titleSwitch === false){
      title.loop();
      title.setVolume(.01);
      this.titleSwitch = true;
    }
    // if game running turn of main menu sound
    if(game.menu.menuState === "close") {
      this.titleSwitch = false;
      if(!this.titleSwitch){
        title.pause()
      }
    }

    // if game running start game sound
    if (game.menu.menuState === "close" && this.backgroundSwitch === false){
      this.backgroundSwitch = true;
      this.fatalitySwitch = false;
        backgroundSound.loop();
        backgroundSound.setVolume(.1);
    }
    // if game over turn off game sound
    if(game.menu.menuState === "gameOver") {
      backgroundSound.stop()
      this.backgroundSwitch = false;
    }

    // fatality audio
    if(game.menu.menuState === "gameOver" && this.fatalitySwitch === false){
      fatality.play()
      fatality.setVolume(.4);
      this.fatalitySwitch = true;
    }


  }
}

