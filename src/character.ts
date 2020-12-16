class Character extends MovableEntity {
  private isAlive: boolean;

  constructor(_isAlive: boolean) {
    super();
    this.isAlive = _isAlive;
  }

  public jump() {}

  public collide() {}
}
