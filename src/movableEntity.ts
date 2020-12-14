import p5 from "p5";

abstract class MovableEntity extends DrawableEntity {
  velocity: p5.Vector;
  applyGravity: number;

  constructor(_velocity: p5.Vector, _applyGravity: number, _height: number, _width: number, _position: p5.Vector, _isVisable: boolean, _img: string) {
    super(_width, _height, _position, _isVisable, _img);
    this.velocity = _velocity;
    this.applyGravity = _applyGravity;
  }

  update() {
    
  }
}
