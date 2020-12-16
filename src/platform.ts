class Platform extends MovableEntity {
  protected color: number;

  constructor(_color: number,_position: p5.Vector, _isVisible: boolean,_velocity: p5.Vector, _applyGravity: number) {
    super(_position, _isVisible,_velocity,_applyGravity);
    this.color = _color;
  }

  public update() {}

  public draw() {}
}
