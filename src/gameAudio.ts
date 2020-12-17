class GameAudio extends DrawableEntity {
 protected volume: boolean;

  constructor(_position: p5.Vector, _isVisible: boolean, _volume:boolean) {
    
    super(_position, _isVisible);
    this.volume = _volume;
  }

  public toggleAudio() {}
  public draw(){}
}

