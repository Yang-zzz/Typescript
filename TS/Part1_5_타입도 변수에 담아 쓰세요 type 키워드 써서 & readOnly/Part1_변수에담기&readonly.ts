type Animal = string | number | undefined; // type alias (타입변수)
let 동물: Animal = 123;

type Animal2 = { name: string; age: number };
let 동물2: Animal2 = { name: "kim", age: 20 };
// 작명 관습 : 영어 대문자로 시작 or 뒤에 type을 붙인다.

// 타입스크립트는 오브젝트 자료수정도 막을 수 있음.

type Girfriend = {
  readonly name: string;
};
// readonly 는 수정할 수 없음 (읽기만 가능)

const 여친: Girfriend = {
  name: "엠버",
};

// ? 는 undifined  또는 다른타입의 축약어

type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type Positiony = { y: number };

type NewType = PositionX & Positiony;

let position: NewType = { x: 10, y: 20 }; // extend 한다 라고 함.
// 주의할점 : 타입은 재정의가 불가능하다.

// type PositionX = { x : number }
// type PositionX = { x : number }

//숙제1 오브젝트 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면?

type Number1 = string | number;
type Number2 = string | number;

type NewNumber = Number1 & Number2;

//숙제2 다음 조건을 만족하는 타입을 만들어 봅시다.
// type ArrayNumber = {
//     readonly position: number[];
//   };

type Result = { color: string; size: number; readonly position: number[] };
let note: Result = { color: "red", size: 5, position: [12] };

//숙제3 다음을 만족하는 type
