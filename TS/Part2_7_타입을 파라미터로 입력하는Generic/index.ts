function 함수테스트(a: unknown[]) {
  return a[0];
}

let a = 함수테스트([4, 2]);
console.log(a);
// unknown 타입의 a 파라미터를 받아, 숫자 형태의 데이터를 반환 하더라도 a의 타입은 unknow이다.
// 때문에 a의 타입을 명확히 해줄 필요가 있는데, 명확히 하기 위해선 2가지 방법이 있다.
// 1. narrowing or as 를 사용해야 함.
// 2. Generic 함수 만들어야 함. (파라미터로 타입을 입력하는 함수)
function 함수테스트2<MyType>(a: MyType[]): MyType {
  return a[0];
}

let a2 = 함수테스트2<number>([4, 2]); // 타입 생략도 가능하지만, 명시해두는 것이 좋아보인다.
let b = 함수테스트2<string>(["4", "2"]); // 도출하고 싶은 값에 따라 유동적으로 변할 수 있다.(확장성)
console.log(a2);

//타입 파라미터 제한두기

function 함수테스트3<MyType extends number>(x: MyType) {
  return x - 1;
}
let a3 = 함수테스트3<number>(100);
// extends 우측에 명시되어 있는 타입인지 확인 시켜달라는 뜻 (커스텀타입도 가능함)
// Mytype 이  number 타입을 만족 시키는 지 (number 속성을 가지고 있는지) 확인

interface LengthCheck {
    length: number;
  }
function 함수테스트4<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}
let a4 = 함수테스트4<string[]>(["100"]);

// extends 우측에 명시되어 있는 타입인지 확인 시켜달라는 뜻 (커스텀타입도 가능함)
// Mytype 이 LengthCheck 타입을 만족시키는지 (LengthCheck 커스텀 속성을 가지고 있는지) 확인

