// 인자의 타입이 불확실한 경우 narrowing 을 써야함

// function 내함수(x: number | string) {
//   if (typeof x === "string") {
//     return x + "1";
//   } else {
//     return x + 1;
//   }
// }
// 내함수(123);

// 방법2
function 내함수2(x: number | string) {
  let array: number[] = [];
  if (typeof x === "number") {
    array[0] = x;
  } else {
  }
}
내함수2(123);

//방법3 assertion
function 내함수3(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
let 이름: string = "kim";
// 이름 as number; 타입을 a에서 b로 바꾸는게 아님

내함수3(123);
// 내로잉 할 때 씀.
// 무슨타입이 들어올지 100% 확실할때 써야함.

//숙제1
function fureArray(x: (number | string)[]) {
  let array: number[] = [];
  x.forEach((a) => {
    if (typeof a === "string") {
      array.push(parseInt(a));
    } else if (typeof a === "number") {
      array.push(a);
    }
  });
  return array;
}

console.log(fureArray([123, "3"]));

//숙제2
function check(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject.pop();
  } else {
    return "없다.";
  }
}
let 지성샘 = { hello: "hi" };
let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

console.log(check(철수쌤)); // 'math'
console.log(check(영희쌤)); // 'english'
console.log(check(민수쌤)); // "korean"
// console.log(check(지성샘)); // 타입에러
