abstract class DrawableEntity {
 
  public position: p5.Vector; // CHANGED THIS TEMPORARILY!
  protected isVisible: boolean;
 


  constructor( _position: p5.Vector, _isVisible: boolean) {
    
    this.position = _position
    this.isVisible = _isVisible
    
  }

// abstract ?
  abstract draw():void; 
}
