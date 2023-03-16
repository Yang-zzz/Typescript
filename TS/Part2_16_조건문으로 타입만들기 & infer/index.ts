type Agetest<T> = T extends string ? string : unknown; // T 라는 파라미터가 string가 맞다면...
// type if 문은 삼항연산자로
// 조건식은 extends를 사용하여

let test: Agetest<string>; // string
let test2: Agetest<number>; // unknown

//연습문제
type FirstItem<T> = T extends any[] ? T[1] : any;
let test3: FirstItem<string[]>;
let test4: FirstItem<number[]>;

// console.log(typeof test3);
// console.log(typeof test4);

// 자주 쓰지 않음.
// infer 키워드 : 조건문에서 쓸 수 있는 infer 키워드, 타입을 왼쪽에서 추출해줌.
type TestPerson<T> = T extends infer R ? string : unknown;
let test5: TestPerson<string>;
// 일 때 R === string

// infet 키워드2 : array 내부의 타입만 뽑고 싶을 때
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
let test6: 타입추출<string[]>;
// 일 때 R === stirng

// infet 키워드3 : 함수를 넣으면 함수의 return 타입만 뽑고 싶다.
type 타입추출2<T> = T extends () => infer R ? R : unknown;
let test7: 타입추출2<() => void>;
// 일 때 R === void

// 근데 ReturnType 이라는 기본 함수가 있다.
type b = ReturnType<() => void>;

//숙제1
type AgeType<T> = T extends string ? string : unknown;
