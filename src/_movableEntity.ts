abstract class MovableEntity extends DrawableEntity {
  velocity: p5.Vector;
  applyGravity: number;

  constructor(_height: number, _width: number, _position: p5.Vector, _isVisable: boolean, _img: string,_velocity: p5.Vector, _applyGravity: number) {
    super(_height, _width, _position, _isVisable, _img);
    this.velocity = _velocity;
    this.applyGravity = _applyGravity;
  }

  update() {
    
  }
}
