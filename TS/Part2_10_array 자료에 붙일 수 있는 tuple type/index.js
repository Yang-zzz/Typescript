// import { type } from "os";
// let 멍멍: (string | boolean)[] = ["dog", true];
// let 멍멍2: [string, boolean] = ["dog", true]; // tuple type 자료순서까지 타입지정 할때 사용
// let 멍멍3: [string, boolean?] = ["dog", true]; // 옵션기능도 가능
// let 멍멍4: [string, boolean?, number?] = ["dog", true]; // 마지막에 넣어야함.
// function 테스트함수(...x: [number, string]) {}
// 테스트함수(1, "222");
// let testArr = [1, 2, 3];
// let testArr2: [number, number, ...number[]] = [4, 5, ...testArr];
// // 숙제1
// let 최근사먹은음식: [string, number, boolean] = ["타코", 4000, true];
// // 숙제2
// let testarr: [string, number, ...boolean[]] = [
//   "동서녹차",
//   4000,
//   true,
//   false,
//   true,
//   true,
//   false,
//   true,
// ];
// // 숙제3
// type 테스트파라미터 = [string, boolean, ...(number | string)[]];
// function 테스트함수2(...rest: 테스트파라미터) {}
// 테스트함수2("a", true, 6, 3, "4", 4);
// // 숙제4
// function 분류기함수(...rest: (number | string)[]) {
//   let result: [string[], number[]] = [[], []];
//   rest.forEach((a) => {
//     if (typeof a === "number") {
//       result[1].push(a);
//     } else {
//       result[0].push(a);
//     }
//   });
// }
// 분류기함수();
//# sourceMappingURL=index.js.map