// 화살표 함수로 에일리어스 만들 수 있음.
var 함수 = function () {
    return 10;
};
// 함수 표현식으로 타입을 지정할 수 있음.
함수("아무거나");
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
