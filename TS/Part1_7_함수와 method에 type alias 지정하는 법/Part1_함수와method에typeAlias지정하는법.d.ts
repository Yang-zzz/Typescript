type 함수타입 = (a: string) => number;
declare let 함수: 함수타입;
type Member3 = {
    name: string;
    age: number;
    plusOne: (x: number) => number;
    changeName: () => void;
};
declare let 회원정보: Member3;
type 타입 = (a: string) => string;
declare let cutZero: 타입;
declare function removeDash(x: string): number;
