class Projectile extends MovableEntity {
  private color: string;
  public superPositionLow: p5.Vector;
  public superPosition: p5.Vector;
  public regularSize: p5.Vector;
  public superSize: p5.Vector

  constructor() {
    super(createVector(), true, createVector(), 0);
    this.color = "lightBlue";
    this.regularSize = createVector(20, 3)
    this.superSize = createVector(10, 3)
    this.position = createVector(
      game.gamePlay.character.position.x,
      game.gamePlay.character.position.y + 50
    );
    this.isVisible = true;
    this.superPosition = createVector(
      game.gamePlay.character.position.x,
      game.gamePlay.character.position.y + 50
    );
    this.superPositionLow = createVector(
      game.gamePlay.character.position.x,
      game.gamePlay.character.position.y + 50
    );
  }

  private superProjectilePosition() {
    if (game.gamePlay.isSuperWeaponAvalible === true) {
      this.superPosition.y -= 2;
      this.superPosition.x += 10;
      this.superPositionLow.y += 2;
      this.superPositionLow.x += 10;
    }
  }

  // Dont show projectiles when out of screen
  private projectileOnScreen() {
    if (this.position.x > width) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

  // Draw superProjectile on screen
  private superProjectile() {
    if (game.gamePlay.isSuperWeaponAvalible === true) {
      rect(this.superPosition.x, this.superPosition.y - 5, this.superSize.x, this.superSize.y, 5);
      rect(this.superPositionLow.x, this.superPositionLow.y - 5, 10, 3, 5);
    }
  }

  public update() {
    this.position.x += 10;
    this.projectileOnScreen();
    this.superProjectilePosition();
  }
  
  public draw() {
    fill(this.color);
    rect(this.position.x, this.position.y, this.regularSize.x, this.regularSize.y, 5);
    this.superProjectile();
  }
}
