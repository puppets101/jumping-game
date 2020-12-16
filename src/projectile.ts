class Projectile extends MovableEntity {
  protected color: number;
  protected diameter: number;

  constructor(_color: number, _diameter: number,_position: p5.Vector, _isVisible: boolean,_velocity: p5.Vector, _applyGravity: number) {
    super(_position, _isVisible,_velocity,_applyGravity);
    this.color = _color;
    this.diameter = _diameter;
  }
  public shoot() {}

  public update() {}

  public draw() {}
}
