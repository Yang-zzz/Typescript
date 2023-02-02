declare function 테스트함수(a: string | undefined): void;
type Fish = {
    swim: string;
};
type Bird = {
    fly: string;
};
declare function 테스트함수2(animal: Fish | Bird): void;
declare let 날짜: Date;
type Car2 = {
    wheel: "4개";
    color: string;
};
type Bike = {
    wheel: "2개";
    color: string;
};
declare function 테스트함수3(x: Car2 | Bike): void;
