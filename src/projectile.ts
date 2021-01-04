class Projectile extends MovableEntity {
  protected color: string;
  protected diameter: number;

  constructor(_color: string, _diameter: number,_position: p5.Vector, _isVisible: boolean,_velocity: p5.Vector, _applyGravity: number) {
    super(_position, _isVisible,_velocity,_applyGravity);
    this.color = _color;
    this.diameter = _diameter;
    
  }
  public shoot() {
    if (keyCode === LEFT_ARROW) {
      this.draw()
      this.position.x = this.position.x += 5
    }
  };

  public update() {
   
  }

  public draw() {
    //createVector(this.position.x, this.position.y)
    fill(this.color)
    ellipse(this.position.x, this.position.y, this.diameter)
  }
}
