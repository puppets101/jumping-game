class GameAudio extends DrawableEntity {
  private backgroundSwitch: boolean
  private fatalitySwitch: boolean;
  private titleSwitch: boolean;
  private audioImg: p5.Image;
  public audioSwitch: boolean;

  constructor() {
    super(createVector(), true);
    this.backgroundSwitch = false;
    this.fatalitySwitch = false;
    this.titleSwitch = false;
    this.audioSwitch = false;
    this.audioImg = loadImage("./assets/imgs/unmute.png");
  }
  update() {
    this.toggleGameSound();
  }

  public draw(){
    image(this.audioImg, 725, 525, 50, 50)
    this.audio();
}

  toggleGameSound(){
        // pause audio
          if(mouseX < 775 &&  mouseX > 725) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed) {
                backgroundSound.stop();
                this.audioSwitch = false;
                this.audioImg = loadImage("./assets/imgs/mute.png")
                //this.audioSwitch = true;
              }
            }
          }
          // resume audio
          if(mouseX < 700 && mouseX > 650) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed && this.audioSwitch === false) {
                backgroundSound.loop();
                this.audioSwitch = true;
                this.audioImg = loadImage("./assets/imgs/unmute.png")
              }
            }
          }
      }

  public audio() {
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
        backgroundSound.setVolume(0.01);
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

