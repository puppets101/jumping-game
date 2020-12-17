abstract class MovableEntity extends DrawableEntity {
  velocity: p5.Vector;
  applyGravity: number;

  constructor(
    position: p5.Vector,
    isVisible: boolean,
    velocity: p5.Vector,
    applyGravity: number
  ) {
    super(position, isVisible);
    this.velocity = velocity;
    this.applyGravity = applyGravity;
  }

  abstract update(): void;
}
