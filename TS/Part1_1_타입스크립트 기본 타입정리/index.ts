let test이름: { name: string } = { name: "kim" };
let test이름2: string | number = "kim";
type 내타입 = string | number;
let 이름3: 내타입 = 123;

function test함수(x: number): number {
  return x * 2;
}

type Member = [number, boolean];
let john: Member = [123, true];

type Member2 = {
  name: string;
};
let john2: Member2 = { name: "kim" };
