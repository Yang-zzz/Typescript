// literal type : 변수에 뭐가 들어올지 엄격하게 관리가능
let 이름2: "kim";

let 접니다: "대머리" | "솔로";
접니다 = "대머리";

// function 함수(a: "hello") :1 | 0 {
//   return 1 또는 0이 return 될 수 있도록 한다!
// }

//예시문제
function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
가위바위보("가위");

//예시문제 변수에 담아서 사용해보기
type 가바보 = "가위" | "바위" | "보";
type 가바보배열 = ("가위" | "바위" | "보")[];

function 가위바위보2(a: 가바보): 가바보배열 {
  return ["바위"];
}
가위바위보2("가위");

//const

const 변수 = "kim";

var 자료 = {
  name: "kim",
} as const;

//

function 내함수(a: "kim") {} // kim 이라는 타입만 들어올 수 있는 것, 'kim' == 자료.name 

내함수(자료.name);
