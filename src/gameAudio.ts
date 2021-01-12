class GameAudio extends DrawableEntity {
  private isMuted: boolean;
  private audioImg: p5.Image;
  private previousMouseIsPressed: boolean;

  constructor() {
    super(createVector(), true);
    this.isMuted = true;
    this.previousMouseIsPressed = mouseIsPressed;
    this.audioImg = unmute;
    backgroundSound.loop();
    this.mute();
    (window as any).getAudioContext().suspend();
  }
  update() {
    this.toggleGameSound();
    this.previousMouseIsPressed = mouseIsPressed;
  }

  public draw(){
    image(this.audioImg, 725, 525, 50, 50);
}
  private mute() {
    this.isMuted = true;
    this.audioImg = mute;
    backgroundSound.setVolume(0);
    shootSound.setVolume(0);
    heart.setVolume(0);
    oh.setVolume(0);
    killSound.setVolume(0);
    title.setVolume(0);
    fatality.setVolume(0);
  }
  
  private unmute() {
    this.isMuted = false;
    this.audioImg = unmute;
    backgroundSound.setVolume(0.01)
    shootSound.setVolume(0.15);
    heart.setVolume(0.1);
    oh.setVolume(0.05);
    killSound.setVolume(0.1);
    title.setVolume(0.05);
    fatality.setVolume(0.1);
  }

  public toggleGameSound(){
        // pause audio
          if(mouseX < 775 &&  mouseX > 725) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed && !this.previousMouseIsPressed) {
                if(this.isMuted){
                  this.unmute();
                } else {
                  this.mute();
                }
                //this.audioSwitch = true;
              }
            }
          }
        
      }

}

