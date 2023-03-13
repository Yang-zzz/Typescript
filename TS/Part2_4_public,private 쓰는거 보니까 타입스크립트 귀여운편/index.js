// 타입스크립트는 객체지향 언어 같은 문법도 제공함 퍼블릭, 프라이베잇, 프로텍티드, 스테틱
//constructor 를 쓰는 이유, 객채를 생성할때 각 객채의 파라미터를 지정할 수 있기 떄문.
var User = /** @class */ (function () {
    function User(a) {
        this.famailyName = "kim";
        this.name = a + this.famailyName;
    }
    User.prototype.이름변경함수 = function () {
        this.famailyName = "park";
    };
    return User;
}());
var 유저1 = new User("철수");
유저1.이름변경함수();
console.log(유저1);
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
        //User Class 처럼 내부에 작성하지 않아도, 파라미터에 public 키워드를 쓰면, 파라미터를 name 프로퍼티로 사용하고 자식에게 줄 수 있음.
    }
    return Person2;
}());
var 자식 = new Person2('kim');
console.log(자식);
// 1. praivate 키워드를 사용하여 외부에서의 데이터 접근을 제한할 수 있다.
// 2. praivate 키워드 사용후 clss 외부에서 변경하고자 할땐 변경함수를 생성하여 사용할 수 있도록해야한다.
// 3. constructor 파라미터에 public 키워드를 사용해 축약하여 프로퍼티를 생성할 수 있다.
