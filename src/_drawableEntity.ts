abstract class DrawableEntity {
  public position: p5.Vector;
  public isVisible: boolean;

  constructor( position: p5.Vector, isVisible: boolean) {
    this.position = position
    this.isVisible = isVisible
  }

  abstract draw():void; 
}
