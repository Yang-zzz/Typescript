// obj
let test이름: { name: string } = { name: "kim" };

// union
let test이름2: string | number = "kim";

// 타입을 변수에 담아
type 내타입 = string | number;
let test이름3: 내타입 = 123;

// 함수에 타입지정
function test함수(x: number): number {
  return x * 2;
}

// tuple
type Member = [number, boolean];
let john: Member = [123, true];

// obj에 여러 타입을 지정해야할 경우
type Member2 = {
  [key: string]: string;
};
let john2: Member2 = { name: "kim" };
