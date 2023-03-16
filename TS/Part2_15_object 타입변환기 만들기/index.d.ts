declare let obj1: {
    name: string;
    age: number;
};
interface Person2 {
    age: number;
    name: string;
}
type PersonKeys = keyof Person2;
declare let aa2: PersonKeys;
interface Person3 {
    [key: string]: number;
}
type PersonKeys2 = keyof Person3;
type testCar2 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
type 새로운타입 = TypeChanger<testCar2>;
type Car5 = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger2<MyType> = {
    [key in keyof MyType]: string;
};
type 새로운타입2 = TypeChanger<Car5>;
declare let obj: 새로운타입2;
