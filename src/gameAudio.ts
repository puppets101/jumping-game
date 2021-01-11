class GameAudio extends DrawableEntity {
  private backgroundSwitch: boolean
  private fatalitySwitch: boolean;
  public titleSwitch: boolean;
  private audioImg: p5.Image;
  public audioSwitch: boolean;
  private menu: Imenu;
    
  constructor(menu: Imenu) {

    super(createVector(), true);
    this.backgroundSwitch = false;
    this.fatalitySwitch = false;
    this.titleSwitch = true;
    this.audioSwitch = false;
    this.audioImg = unmute;
    this.menu = menu;
  }
  update() {
    this.toggleGameSound();
  }

  public draw(){
    image(this.audioImg, 725, 525, 50, 50)
    this.audio();
}


public update() {

}


  toggleGameSound(){
        // pause audio
          if(mouseX < 775 &&  mouseX > 725) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed) {
                if(this.backgroundSwitch){
                  this.backgroundSwitch = false;
                  backgroundSound.stop();
                  this.audioSwitch = false;
                  this.audioImg = mute;
                }
                //this.audioSwitch = true;
              }
            }
          }
          // resume audio
          if(mouseX < 700 && mouseX > 650) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed && this.audioSwitch === false) {
                if(!this.backgroundSwitch) {
                  this.backgroundSwitch = true;
                  backgroundSound.loop();
                  this.audioSwitch = true;
                  this.audioImg = unmute;
                }
              }
            }
          }
      }

  public audio() {
    // main menu sound
    if(this.menu.menuState === "main" && this.titleSwitch === true){
      title.loop();
      title.setVolume(.01);
      this.titleSwitch = false;
    }
    // if game running turn off main menu sound
    if(this.menu.menuState === "close") {
      this.titleSwitch = false;
      title.stop()
    }

    // if game running start game sound
    if (this.menu.menuState === "close" && this.backgroundSwitch === false){
      this.backgroundSwitch = true;
      this.fatalitySwitch = false;
      backgroundSound.loop();
      backgroundSound.setVolume(0.01);
    }
    // if game over turn off game sound
    if(this.menu.menuState === "gameOver") {
      backgroundSound.stop()
      this.backgroundSwitch = false;
    }

    // fatality audio
    if(this.menu.menuState === "gameOver" && this.fatalitySwitch === false){
      fatality.play()
      fatality.setVolume(.4);
      this.fatalitySwitch = true;
      this.titleSwitch = true;
    }


  }
}

