abstract class DrawableEntity {
  protected height: number;
  protected width: number;
  protected position: p5.Vector;
  protected isVisable: boolean;
  protected img: string;


  constructor(_height: number, _width: number, _position: p5.Vector, _isVisable: boolean, _img: string) {
    this.height = _height
    this.width = _width
    this.position = _position
    this.isVisable = _isVisable
    this.img = _img
  }

  public draw() {
    
  } 
}
