abstract class MovableEntity extends DrawableEntity {
  velocity: p5.Vector;
  applyGravity: number;

  constructor( _position: p5.Vector, _isVisible: boolean,_velocity: p5.Vector, _applyGravity: number) {
    super(_position, _isVisible);
    this.velocity = _velocity;
    this.applyGravity = _applyGravity;
  }

 abstract update():void; 
}
