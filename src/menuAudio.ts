class MenuAudio {
    public menuAudioSwitch: boolean;
    public audioImg: p5.Image;

    constructor() {
        this.menuAudioSwitch = false;
        this.audioImg = unmute;
    }
    update() {
        this.toggleMenuSound();
    }
    public draw() {
        image(this.audioImg, 725, 525, 50, 50)
    }
    toggleMenuSound(){
        // pause audio
          if(mouseX < 775 &&  mouseX > 725) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed) {
                  if(!game.gameAudio.audioSwitch){
                      title.stop();
                      game.gameAudio.audioSwitch = true;
                      this.menuAudioSwitch = false;
                      this.audioImg = mute;
                  }
                //this.audioSwitch = true;
              }
            }
          }
          // resume audio
          if(mouseX < 700 && mouseX > 650) {
            if(mouseY < 575 && mouseY > 525){
              if(mouseIsPressed) {
                  if(game.gameAudio.audioSwitch){
                      title.loop();
                      game.gameAudio.audioSwitch = false;
                      this.menuAudioSwitch = true;
                      this.audioImg = unmute;
                  }
              }
            }
          }
      }


}