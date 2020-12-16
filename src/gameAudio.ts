class GameAudio extends DrawableEntity {
 protected volume: boolean;

  constructor(_height: number, _width: number, _position: p5.Vector, _isVisable: boolean, _img: string,_volume:boolean) {
    
    super(_height, _width, _position, _isVisable, _img);
    this.volume = _volume;
  }

  public toggleAudio() {}
  public draw(){}
}

