class Character extends MovableEntity {
  private isAlive: boolean;

  constructor(_isAlive: boolean, _position: p5.Vector, _isVisible: boolean,_velocity: p5.Vector, _applyGravity: number) {
    super(_position, _isVisible,_velocity,_applyGravity);
    this.isAlive = _isAlive;
  }

  public jump() {};

  public collide(){};
  public draw(){};
  public update(){};
}
