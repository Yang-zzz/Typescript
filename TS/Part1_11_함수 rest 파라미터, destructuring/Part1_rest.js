var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 레스트 파라미터 기법
function 레스트() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
레스트(1, 5, 2, 5);
// 스프레드 오퍼레이트 기법 객채,배열을 분해
var arr = [1, 2, 3];
var arr2 = [4, 3];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
//destructuring 기법
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
// let {student : student, age : age} = {student: true, age: 20}; // 왼쪽 오른쪽 똑같이 맞춰야 함.
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age; // 위아래 똑같은거
//ex 객체 안에 있던 자료를 파라미터로 넣고 싶을 때, 함수 파라미터에 distructuring 가능
var 오브젝트 = { student: true, age: 20 };
function 테스트(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
테스트({ student: student, age: age });
// 숙제 1 <- 다시해보기
// function 최댓값() {}
// console.log(최댓값(4,6,3,2));
// 숙제 2 <- 답은 맞지만, 답안과 다르다 다시해보자!
function 숙제함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
숙제함수({ user: "kim", comment: [3, 5, 4], admin: false });
function 숙제함수2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
숙제함수2([40, "wine", false]);
