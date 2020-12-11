abstract class MovableEntity extends DrawableEntity {
  velocity: number;
  applyGravity: number;

  constructor(_velocity: number, _applyGravity: number) {
    super(width, height);
    this.velocity = _velocity;
    this.applyGravity = _applyGravity;
  }

  update() {
    console.log("update");
  }
}
