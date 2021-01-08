class Lives extends DrawableEntity {
  public life: number;
  public lifeAsset: p5.Image
  constructor() {
    super(createVector(750, 50), true);
    this.life = 3;
    this.lifeAsset = lifeAsset;
  }

  public countLives() {
    this.life--;
    if (this.life === 0) {
      console.log("game over");
      game.gamePlay.character.isAlive = false;
    }
  }

  public update() {}

  public draw() {
    switch(this.life) {
      case 0:
        break;
      case 1: 
        image(this.lifeAsset, this.position.x, this.position.y, 30, 30);
        break;
      case 2 :
        image(this.lifeAsset, this.position.x, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 35, this.position.y, 30, 30);
        break;
      case 3 :
        image(this.lifeAsset, this.position.x, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 35, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 70, this.position.y, 30, 30);  
        break;    
      case 4 :
        image(this.lifeAsset, this.position.x, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 35, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 70, this.position.y, 30, 30);  
        image(this.lifeAsset, this.position.x - 105, this.position.y, 30, 30);         
        break;  
      case 5 :
        image(this.lifeAsset, this.position.x, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 35, this.position.y, 30, 30);
        image(this.lifeAsset, this.position.x - 70, this.position.y, 30, 30);  
        image(this.lifeAsset, this.position.x - 105, this.position.y, 30, 30);   
        image(this.lifeAsset, this.position.x - 140, this.position.y, 30, 30);                
        break;  
    }
    
    //fill("red");
    //text(round(this.life), 750, 50);
    //textFont(pixelFont);
  }
}
