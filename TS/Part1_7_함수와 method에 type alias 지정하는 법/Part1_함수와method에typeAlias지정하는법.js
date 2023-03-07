// 화살표 함수로 에일리어스 만들 수 있음.
// 문자열 타입을 인자로 받고, 넘버타입을 리턴하는 함수타입
var 함수 = function () {
    return 10;
};
// 함수 표현식으로 타입을 지정할 수 있음.
함수("아무거나");
var 회원정보 = {
    name: "kim",
    age: 14,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () { },
};
회원정보.plusOne(3);
회원정보.changeName();
var cutZero = function (a) {
    var result = a.replace(/^0+/, "");
    return result;
};
cutZero("0123");
//문제1-2
function removeDash(x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
}
//문제2
