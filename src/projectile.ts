class Projectile extends MovableEntity {
  public color: string;
  public diameter: number;
 
  
  //protected position: p5.Vector
  //protected isVisible: Boolean
  
    constructor() {
    super(createVector(), true, createVector(), 0); //_position, _isVisible,_velocity,_applyGravity//
    this.color = 'red';
    this.diameter = 10;
    this.position = createVector(game.gamePlay.character.position.x, game.gamePlay.character.position.y + 50)//,game.gamePlay.character.position.y
    this.isVisible = true;
    
    
    
  }
  
  public update() {
   this.position.x += 10
    this.projectileOnScreen()
  }

   private projectileOnScreen() {
     if (this.position.x  > width) {
       this.isVisible = false;
     } else {
       this.isVisible = true;
     }
   }
   
     
  public draw() {
    //createVector(this.position.x, this.position.y)
    fill(this.color)
    ellipse(this.position.x, this.position.y, this.diameter)
    
    
    
  }
}
   
  

   

