class TitleScreen {
  private backstory: string;
  private menu: Imenu;
  private fade: number;
  private fadeAmount: number;
  private titleScreen: any; // ANYYYYY ???????????????????????????????????

  constructor(menu: Imenu) {
    this.backstory = "";
    this.menu = menu;

    //fade in and out for the press any key text
    this.fadeAmount = 1;
    this.fade = 40;
    //add the video to the variable titleScreen
    this.titleScreen = createVideo(["./assets/video/title.mp4"]);
    // default videos prints on the dom, not on canvas, so its hidden by default and then printed on cavas in draw function
    this.titleScreen.hide();
  }

  pressAnyKey() {
    // if key is pressed -- menuState = main
  }

  draw() {
  
      //prints the video as an image on the canvas and loops it
      image(this.titleScreen, 0, 0, 800, 600);
      this.titleScreen.loop();
      // game.update();
      // game.draw();

      //text for the logo
      textFont(outrunFont);
      textSize(50);
      fill(128, 0, 0);
      textAlign(CENTER);
      text("Cyberjump", 400, 200);

      // text for press any key
      textFont(pixelFont);
      textSize(20);
      fill(128, 0, 0, this.fade);
      textAlign(CENTER);
      text("Press any key", 400, 500);

      // making the text fade in and out
      if (this.fade <= 40) {
        this.fadeAmount = 5;
      } else if (this.fade > 255) {
        this.fadeAmount = -5;
      }
      this.fade += this.fadeAmount;
    
  }
}
