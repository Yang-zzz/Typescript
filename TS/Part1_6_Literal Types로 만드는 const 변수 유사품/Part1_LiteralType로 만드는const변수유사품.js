// literal type : 변수에 뭐가 들어올지 엄격하게 관리가능
var 이름2;
var 접니다;
접니다 = "대머리";
// function 함수(a: "hello") :1 | 0 {
//   return 1 또는 0이 return 될 수 있도록 한다!
// }
//예시문제
function 가위바위보(a) {
    return ["가위"];
}
가위바위보("가위");
function 가위바위보2(a) {
    return ["바위"];
}
가위바위보2("가위");
//const
var 변수 = "kim";
var 자료 = {
    name: "kim",
};
//
function 내함수(a) { } // kim 이라는 타입만 들어올 수 있는 것, 'kim' == 자료.name 
내함수(자료.name);
