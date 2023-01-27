// 타입스크립트는 객체지향 언어 같은 문법도 제공함 퍼블릭, 프라이베잇, 프로텍티드, 스테틱
//constructor 를 쓰는 이유, 객채를 생성할때 각 객채의 파라미터를 지정할 수 있기 떄문.

class User {
  // public name; // 퍼블릭은 모든 자식들이 이용가능
  // private name; // 자식들이 수정할 수 없음. : 속성을 숨기고 안에서만 쓰고 싶을 때, 보호하고 싶을 때 사용

  name: string;
  private famailyName: string = "kim";

  constructor(a: string) {
    this.name = a + this.famailyName;
  }
  이름변경함수() {
    this.famailyName = "park";
  }
  // 근데 class 밖에서 바꾸고싶다면? -> 함수를 만들어야 한다.
}

let 유저1 = new User("철수");
유저1.이름변경함수();
console.log(유저1);

class Person2 {
  constructor(public name: string) {
    //내부에 작성하지 않아도 파라미터에 public 키워드를 쓰면 자식에게 줄 수 있음.
  }
}

let 자식 = new Person2('kim');
console.log(자식)


