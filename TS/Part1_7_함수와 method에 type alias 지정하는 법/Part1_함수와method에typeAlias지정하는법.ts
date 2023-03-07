type 함수타입 = (a: string) => number;
// 화살표 함수로 에일리어스 만들 수 있음.
// 문자열 타입을 인자로 받고, 넘버타입을 리턴하는 함수타입

let 함수: 함수타입 = function () {
  return 10;
};
// 함수 표현식으로 타입을 지정할 수 있음.

함수("아무거나");

// 오브젝트 안에 함수 만들기

// 함수는 예측 가능해야 하기 때문에 인자받는 인자의 타입도 지정해야 함.

type Member3 = {
  name: string;
  age: number;
  plusOne: (x: number) => number;
  changeName: () => void;
};

let 회원정보: Member3 = {
  name: "kim",
  age: 14,
  plusOne(x: number) {
    return x + 1;
  },
  changeName() {},
};

회원정보.plusOne(3);
회원정보.changeName();
// 회원정보 obj에서는 해당 메서드가 어떻게 실행될지 실행문({}) 까지 작성해줘야 함.
// name, age, plusOne(), changeName() 모두 들어가야 해당 타입에 맞게 작성된걸로 인정된다. (프로퍼티 하나라도 빠지면 안됨.)


// 문제1-1
type 타입 = (a: string) => string;
let cutZero: 타입 = function (a) {
  let result = a.replace(/^0+/, "");
  return result;
};

cutZero("0123");

//문제1-2
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}

//문제2
