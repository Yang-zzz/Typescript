declare class Car {
    model: string;
    price: number;
    constructor(a: string, b: number);
    tax(): number;
}
declare let car1: Car;
declare class Word {
    str: string[];
    num: number[];
    constructor(...param: (number | string)[]);
}
declare let obj: Word;
