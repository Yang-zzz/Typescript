// Protected
// private과 동일하게 class {} 범위 안에서만 사용 가능
class TestUser {
  protected x = 10; // o
  // private x = 10; // x
}

class NewUser extends TestUser {
  doThis() {
    this.x = 20;
  }
}

// 차이점
// private 키워드가 부여된 변수는 해당 클래스에게 상속받은(extends) 클래스에서 쓸 수 없다.
// protected 키워드가 부여된 변수는 해당 클래스에게 상속받은(extends) 클래스에서 사용 할 수 있다.

// Static
class TestUser2 {
  // private static x = 10;
  static x = 10;
  y = 20;
}

let 테스트자식 = new TestUser2();
// console.log(테스트자식.x); // TestUser2()를 통해 생성된 instance 테스트자식에서는 'x' 에 접근이 안됨
console.log(TestUser2.x); // TestUser2() 클래스가 직접 접근할 경우 가능
// static 변수 또는 함수에 키워드가 있다면, 부모 클래스를 통해 접근해야 사용 가능함. 해당 변수(또는 함수)는 자녀에게 상속되지 않음.


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
