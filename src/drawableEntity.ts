abstract class DrawableEntity {
  protected height: number;
  protected width: number;
  protected yPosition: number;
  protected xPosition: number;


  constructor(_height: number, _width: number, _yPosition: number, _xPosition: number) {
    this.height = _height;
    this.width = _width;
    this.yPosition = _yPosition;
    this.xPosition = _xPosition;
  }

  public draw() {
    rect(this.xPosition, this.yPosition, this.width, this.height)
  }
}
