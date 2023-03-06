// 타입이 하나로 확정되지 않았을 경우 Narrowing
// assertion 문법 (타입 덮어쓰기)
// 1. narrowing 할 때 사용
// 2. 유니온 타입을 확정을 짖는 문법이지, 타입이 전혀다른 변수에 사용하는 것은 x
// 3. 무슨 타입이 들어올지 확실할 때 사용.
// 결론: 무슨 타입이 들어올지 모를 경우에 사용할 수 있음. (ex. 유니온타입) 하지만 확실하게 타입을 알고 있을 때 사용하는게 좋음.
// 숙제1
function test이름1(x) {
    if (x) {
        console.log("안녕하세요" + x);
    }
    else {
    }
    console.log("왜입력안해요");
}
test이름1("양지성");
// 숙제2
function count(x) {
    return x.toString().length;
}
count(123);
// 숙제3
function 결혼가능하냐(x, y, z) {
    var score = 0;
    score += x;
    if (y === true) {
        score += 500;
    }
    if (z === "상") {
        score += 100;
    }
    if (score >= 600) {
        return "결혼가능";
    }
}
console.log(결혼가능하냐(100, true, "상"));
// 숙제 1 (forEach)
// function filterString(x: (number | string)[]) {
//   let testArray: number[] = [];
//   x.forEach((a) => {
//     if (typeof a === "string") {
//       testArray.push(parseInt(a));
//     } else if (typeof a === "number") {
//       testArray.push(a);
//     }
//   });
//   return testArray
// }
// console.log(filterString([1,2,'3',4,'5']));
// 숙제 1 (for 반복문)
// function 숙제1(x: (number | string)[]) {
//   let testArray: number[] = [];
//   for (let i = 0; i < x.length; i++) {
//     if (typeof x[i] === "string") {
//       testArray.push(parseInt(x[i]));
//     } else if(typeof x[i] === "number") {
//       testArray.push(parseInt(x[i]));
//     }
//   }
//   return testArray
// }
