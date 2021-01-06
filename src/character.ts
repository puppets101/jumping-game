class Character extends MovableEntity {
  public isAlive: boolean;
  public size: p5.Vector;
  // private prevKeyIsPressed: boolean;
  private liftForce: number;
  public canJump: boolean;

  private runnerAnimation: p5.Image;

  constructor() // position: p5.Vector, // size: p5.Vector, // isAlive: boolean,
  // isVisible: boolean,
  // velocity: p5.Vector,
  // applyGravity: number
  {
    super(createVector(), true, createVector(), 0.4);
    this.isAlive = true;
    this.size = createVector(50, 80);
    this.position = createVector(100, 490);
    // this.prevKeyIsPressed = false;
    this.velocity = createVector(0, 0);
    this.liftForce = -30;
    this.canJump = true;

    this.runnerAnimation = runnerAsset;

    
  }
  
  // private handleUserInput() {
    //   if (key === " ") {
      //     console.log("jump");
      //     this.jump();
      //   }
      // }
      public addSprite(){

  }
  

  public jump() {
    if (this.canJump) {
      this.velocity.y += this.liftForce;
      this.applyGravity = 0.4;
      this.canJump = false;
    }
  }

  public collide() { }

  public update() {
    

    this.velocity.y += this.applyGravity;
    this.velocity.y *= 0.9;
    this.position.y += this.velocity.y;

    if (this.position.y > 490) {
      this.position.y = 490;
      this.velocity.y = 0;
      this.canJump = true;
    }
  }

  public show() {


    // fill(255);
    // rect(this.position.x, this.position.y, this.size.x, this.size.y)
    image(this.runnerAnimation, this.position.x - 28, this.position.y -5, 110, 120 )

  }

  public draw() {

    this.update();
    this.show();
  }
}
