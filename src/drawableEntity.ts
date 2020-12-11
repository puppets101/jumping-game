abstract class DrawableEntity {
  protected height: number;
  protected width: number;

  constructor(_height: number, _width: number) {
    this.height = _height;
    this.width = _width;
  }

  draw() {}
}
