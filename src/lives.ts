class Lives extends DrawableEntity {
  public life: number;
  private lifeAsset: p5.Image
  
  constructor() {
    super(createVector(750, 30), true);
    this.life = 3;
    this.lifeAsset = lifeAsset;
  }

  public countLives() {
    this.life--;
    if(this.life !== 0){
      oh.play();
    }
    
    if (this.life === 0) {
      game.gamePlay.character.isAlive = false;
      fatality.play();
      game.menu.changeMenuState("gameOver");
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
  }
}
