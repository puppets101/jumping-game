abstract class MovableEntity extends DrawableEntity {
  velocity: number;
  applyGravity: number;

  constructor(_velocity: number, _applyGravity: number, width: number, height: number, xPosition: number, yPosition: number) {
    super(width, height, xPosition, yPosition);
    this.velocity = _velocity;
    this.applyGravity = _applyGravity;
  }

  update() {
    // this.yPosition -= this.velocity
    this.yPosition += this.applyGravity;

    if ((this.yPosition + this.height) >= height) {
      this.applyGravity = 0;

    }
  }
}
