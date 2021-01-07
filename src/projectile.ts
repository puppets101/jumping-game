class Projectile extends MovableEntity {
  public color: string;
  public superPositionLow:p5.Vector; 
  public superPosition: p5.Vector;
  constructor() {
  super(createVector(), true, createVector(), 0); //_position, _isVisible,_velocity,_applyGravity//
  this.color = 'lightBlue';
  this.position = createVector(game.gamePlay.character.position.x, game.gamePlay.character.position.y + 50)//,game.gamePlay.character.position.y
  this.isVisible = true;
  this.superPosition = createVector(game.gamePlay.character.position.x, game.gamePlay.character.position.y + 50)
  this.superPositionLow =  createVector(game.gamePlay.character.position.x, game.gamePlay.character.position.y + 50)
}
public update() {
 this.position.x += 10;
  // powerUp weapon
 this.superProjectilePosition() // activate on comand !!!!!!!
 this.projectileOnScreen()
}
// position superProjectiles
  private superProjectilePosition(){
    if (game.gamePlay.super === true){
      this.superPosition.y -= 2;
      this.superPosition.x += 10;
      this.superPositionLow.y += 2;
      this.superPositionLow.x += 10
    }
  }
 
  // dont show projectiles when out of screen
 private projectileOnScreen() {
   if (this.position.x  > width) {
     this.isVisible = false;
   } else {
     this.isVisible = true;
   }
 }

 // draw superProjectile on screen if life > 4 is true
   public superProjectile(){
      if (game.gamePlay.super === true){
        rect(this.superPosition.x, this.superPosition.y -5, 10, 3, 5 );
        rect(this.superPositionLow.x, this.superPositionLow.y -5, 10, 3, 5 );
      } 
     
    } 
    public draw() {
      //createVector(this.position.x, this.position.y)
      fill(this.color)
     // ellipse(this.position.x, this.position.y, this.diameter)
      rect(this.position.x, this.position.y, 20, 3, 5 );
      this.superProjectile();
    }
  }
  
   
      
      
  
 
  

  

      
     
       
      
     

   
  


