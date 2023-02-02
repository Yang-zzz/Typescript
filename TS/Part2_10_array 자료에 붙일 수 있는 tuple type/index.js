var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ["dog", true];
var 멍멍2 = ["dog", true]; // tuple type 자료순서까지 타입지정 할때 사용
var 멍멍3 = ["dog", true]; // 옵션기능도 가능
var 멍멍4 = ["dog", true]; // 마지막에 넣어야함.
function 테스트함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
}
테스트함수(1, "222");
var testArr = [1, 2, 3];
var testArr2 = __spreadArray([4, 5], testArr, true);
// 숙제1
var 최근사먹은음식 = ["타코", 4000, true];
// 숙제2
var testarr = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
function 테스트함수2() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
테스트함수2("a", true, 6, 3, "4", 4);
// 숙제4
function 분류기함수() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [[], []];
    rest.forEach(function (a) {
        if (typeof a === "number") {
            result[1].push(a);
        }
        else {
            result[0].push(a);
        }
    });
}
분류기함수();
export {};
