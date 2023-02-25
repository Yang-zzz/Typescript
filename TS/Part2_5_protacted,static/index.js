var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Protected
// private과 동일하게 class {} 범위 안에서만 사용 가능
var TestUser = /** @class */ (function () {
    function TestUser() {
        this.x = 10; // o
        // private x = 10; // x
    }
    return TestUser;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.x = 20;
    };
    return NewUser;
}(TestUser));
// 차이점
// private 키워드가 부여된 변수는 해당 클래스에게 상속받은(extends) 클래스에서 쓸 수 없다.
// protected 키워드가 부여된 변수는 해당 클래스에게 상속받은(extends) 클래스에서 사용 할 수 있다.
// Static
var TestUser2 = /** @class */ (function () {
    function TestUser2() {
        this.y = 20;
    }
    // private static x = 10;
    TestUser2.x = 10;
    return TestUser2;
}());
var 테스트자식 = new TestUser2();
// console.log(테스트자식.x); // TestUser2()를 통해 생성된 instance 테스트자식에서는 'x' 에 접근이 안됨
console.log(TestUser2.x); // TestUser2() 클래스가 직접 접근할 경우 가능
// static 변수 또는 함수에 키워드가 있다면, 부모 클래스를 통해 접근해야 사용 가능함. 해당 변수(또는 함수)는 자녀에게 상속되지 않음.
var TestUser3 = /** @class */ (function () {
    function TestUser3() {
        this.intro = TestUser3.skill + "전문가입니다.";
        // intro = this.skill + '전문가입니다.';
    }
    TestUser3.skill = "js";
    return TestUser3;
}());
var 테스트철수 = new TestUser3();
console.log(테스트철수);
//숙제1 : 누가 쓸 수 있는지 수정할 수 있는지
var 숙제User = /** @class */ (function () {
    function 숙제User() {
        this.z = 30; // 해당 클래스와 extends(상속)받은 클래스에서도 사용할 수 있음.
    }
    숙제User.x = 10; // 숙제 User class 에서 쓸 수 있음.
    숙제User.y = 20; // 숙제 User class 에서 사용할 수 있고, 숙제User. 로 접근하여 해당 값에도 접근할 수 있음.
    return 숙제User;
}());
//숙제2
var 숙제User2 = /** @class */ (function () {
    function 숙제User2() {
    }
    숙제User2.addOne = function (a) {
        숙제User2.x + a;
    };
    숙제User2.printX = function () {
        console.log(숙제User2.x);
    };
    숙제User2.x = 10;
    숙제User2.y = 20;
    return 숙제User2;
}());
숙제User2.addOne(3);
숙제User2.addOne(4);
숙제User2.printX();
// 숙제3
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "<div style=\"position:relative;\n      top: ".concat(a * 400, "px;\n      left: ").concat(a * 400, "px;\n      width: ").concat(this.width, "px;\n      height: ").concat(this.height, "px;\n      background: ").concat(this.color, "\"></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
var test네모 = new Square(30, 30, "red");
test네모.draw();
//# sourceMappingURL=index.js.map