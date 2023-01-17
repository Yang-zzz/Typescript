type 함수타입 = (a: string) => number;
// 화살표 함수로 에일리어스 만들 수 있음.

let 함수: 함수타입 = function () {
  return 10;
};
// 함수 표현식으로 타입을 지정할 수 있음.

함수("아무거나");

//

// type Member = {
//     name = string,
//     age = number,
//     plusOne: (x :number) => number,
//     change : () => void
// };

// let 회원정보 = {
//   name: "kim",
//   plusOne() ,
//   changeName();
// };

// 회원정보.plusOne();
// 회원정보.changeName();

// function 함수1 () {}
// function 함수2 () {}

//문제1-1
type 타입 = (a: string) => string;
let cutZero: 타입 = function (a) {
  let result = a.replace(/^0+/, "");
  return result
};

cutZero("0123");

//문제1-2
function removeDash(x: string) : number {
    let result = x.replace(/-/g, "");
    return parseFloat(result)
}


//문제2




