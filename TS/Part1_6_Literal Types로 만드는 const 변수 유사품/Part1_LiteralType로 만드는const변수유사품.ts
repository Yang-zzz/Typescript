// literal type : 변수에 뭐가 들어올지 엄격하게 관리가능
let 이름2: "kim";

let 접니다: "대머리" | "솔로";
접니다 = "대머리";

// function 함수(a: "hello") :1 | 0 {
//   return
// }

//예시문제
function 가위바위보(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}
가위바위보("가위");


//const

const 변수 = 'kim';


var 자료 = {
    name : 'kim'
} as const

// 

function 내함수(a: 'kim') {
}

내함수(자료.name)