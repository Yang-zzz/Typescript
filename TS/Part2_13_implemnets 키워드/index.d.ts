interface CarType {
    model: string;
    price: number;
}
declare class BoongCar implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이: BoongCar;
