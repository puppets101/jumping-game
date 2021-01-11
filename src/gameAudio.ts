class GameAudio extends DrawableEntity {
  private backgroundSwitch: boolean;
  private shootSwitch: boolean;
  private fatalitySwitch: boolean;
  private titleSwitch: boolean;
  private menu: Imenu;

  constructor(menu: Imenu) {
    super(createVector(), true);
    this.backgroundSwitch = false;
    this.shootSwitch = false;
    this.fatalitySwitch = false;
    this.titleSwitch = false;
    this.menu = menu;
  }
  
  
  public draw(){
    this.toggleAudio();
}

public update() {

}

  private toggleAudio() {
    // main menu sound
    if(this.menu.menuState === "main" && this.titleSwitch === false){
      title.loop();
      title.setVolume(.1);
      this.titleSwitch = true;
    }
    // if game running turn off main menu sound
    if(this.menu.menuState === "close") {
      this.titleSwitch = false;
      if(!this.titleSwitch){
        title.pause()
      }
    }

    // if game running start game sound
    if (this.menu.menuState === "close" && this.backgroundSwitch === false){
      this.backgroundSwitch = true;
      this.fatalitySwitch = false;
        backgroundSound.loop();
        backgroundSound.setVolume(.1);
    }
    // if game over turn off game sound
    if(this.menu.menuState === "gameOver") {
      backgroundSound.stop()
      this.backgroundSwitch = false;
      this.shootSwitch = false;
    }

    // fatality audio
    if(this.menu.menuState === "gameOver" && this.fatalitySwitch === false){
      fatality.play()
      fatality.setVolume(.5);
      this.fatalitySwitch = true;
    }


  }
}

