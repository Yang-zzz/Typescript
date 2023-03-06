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
        //내부에 작성하지 않아도 파라미터에 public 키워드를 쓰면 자식에게 줄 수 있음.
    }
    return Person2;
}());
var 자식 = new Person2('kim');
console.log(자식);
