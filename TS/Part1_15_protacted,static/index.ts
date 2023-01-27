// protected
// {} 안에서만 사용 가능
class TestUser {
  protected x = 10;
  // private 팔드는 해당 클레스에게 상속받은 자식 클래스에서 쓸 수 없다.
  // protexted 는 가능
}

class NewUser extends TestUser {
  doThis() {
    this.x = 20;
  }
}

//static

class TestUser2 {
  // private static x = 10;
  static x = 10;
  y = 20;
}
// 부모에 직접, 자녀에게 상속 x

let 테스트자식 = new TestUser2();
// console.log(테스트자식.x);
console.log(TestUser2.x);

class TestUser3 {
  static skill = "js";
  intro = TestUser3.skill + "전문가입니다.";
  // intro = this.skill + '전문가입니다.';
}

let 테스트철수 = new TestUser3();
console.log(테스트철수);

//숙제1 : 누가 쓸 수 있는지 수정할 수 있는지
class 숙제User {
  private static x = 10; // 숙제 User class 에서 쓸 수 있음.
  public static y = 20; // 숙제 User class 에서 사용할 수 있고, 숙제User. 로 접근하여 해당 값에도 접근할 수 있음.
  protected z = 30; // 해당 클래스와 extends(상속)받은 클래스에서도 사용할 수 있음.
}

//숙제2
class 숙제User2 {
  private static x = 10;
  public static y = 20;

  static addOne(a: number) {
    숙제User2.x + a;
  }

  static printX() {
    console.log(숙제User2.x);
  }
}

숙제User2.addOne(3);
숙제User2.addOne(4);
숙제User2.printX();

// 숙제3
class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {}
  draw() {
    let a = Math.random();
    let square = `<div style="position:relative;
      top: ${a * 400}px;
      left: ${a * 400}px;
      width: ${this.width}px;
      height: ${this.height}px;
      background: ${this.color}"></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}

let test네모 = new Square(30, 30, "red");
test네모.draw();
