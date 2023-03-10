function 함수테스트(a) {
    return a[0];
}
var a = 함수테스트([4, 2]);
console.log(a);
// unknown 타입의 a 파라미터를 받아, 숫자 형태의 데이터를 반환 하더라도 a의 타입은 unknow이다.
// 때문에 a의 타입을 명확히 해줄 필요가 있는데, 명확히 하기 위해선 2가지 방법이 있다.
// 1. narrowing or as 를 사용해야 함.
// 2. Generic 함수 만들어야 함. (파라미터로 타입을 입력하는 함수)
function 함수테스트2(a) {
    return a[0];
}
var a2 = 함수테스트2([4, 2]); // 타입 생략도 가능하지만, 명시해두는 것이 좋아보인다.
var b = 함수테스트2(["4", "2"]); // 도출하고 싶은 값에 따라 유동적으로 변할 수 있다.(확장성)
console.log(a2);
//예시
//타입 파라미터 제한두기
function 함수테스트3(x) {
    return x - 1;
}
var a3 = 함수테스트3(100);
function 함수테스트4(x) {
    return x.length;
}
var a4 = 함수테스트4(["100"]);
var data = '{"name" : "dog", "age" : 1 }';
function 애니멀테스트(x) {
    return JSON.parse(x);
}
var result = 애니멀테스트(data);
console.log(typeof (result));
