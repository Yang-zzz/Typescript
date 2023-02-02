declare function 레스트(...a: number[]): void;
declare let arr: number[];
declare let arr2: number[];
declare let arr3: number[];
declare let 변수1: string, 변수2: number;
declare let student: boolean, age: number;
declare let 오브젝트: {
    student: boolean;
    age: number;
};
declare function 테스트({ student, age }: {
    student: boolean;
    age: number;
}): void;
declare function 숙제함수({ user, comment, admin, }: {
    user: string;
    comment: number[];
    admin: boolean;
}): void;
type 어레이 = (number | string | boolean)[];
declare function 숙제함수2([a, b, c]: 어레이): void;
